import crypto from "crypto";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import { generateOtp, getOtpHtml } from "../utils/utils.js";
import optModel from "../models/otp.model.js";
import { sendEmail } from "../services/email.service.js";
import { sendOtp } from "../services/otp.service.js";
import refreshTokenModel from "../models/refreshToken.model.js";


export async function register(req, res) {
    const { fullName, username, email, password, avatar } = req.body

    const isAlreadyRegistered = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    })
    if (isAlreadyRegistered) {
        return res.status(409).json({
            message: "Username or Email already exists",
            status: false
        })
    }

    const hashPassword = crypto.createHash("sha256").update(password).digest("hex")

    const user = await userModel.create({
        fullName,
        username,
        email,
        password: hashPassword,
        avatar
    })

    await sendOtp(email, user._id)

    // const otp = generateOtp()
    // const html = getOtpHtml(otp)

    // const otpHash = crypto.createHash("sha256").update(otp).digest("hex")
    // await optModel.create({
    //     email,
    //     user: user._id,
    //     otpHash
    // })

    // await sendEmail(email, "OTP Verification", `Your OTP code is ${otp}`, html)
    res.status(201).json({
        message: "User created successfully",
        user: {
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            verified: user.verified
        }
    })
}

export async function resendOTP(req, res) {
    try {
        const { email } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        if (user.verified) {
            return res.status(400).json({
                message: "User already verified"
            })
        }

        const alreadyOtpSend = await optModel.findOne({ user: user._id })

        if (!alreadyOtpSend) {
            return res.status(404).json({
                message: "OTP record not found"
            });
        }

        // const otp = generateOtp()
        // const html = getOtpHtml(otp)

        // const otpHash = crypto.createHash("sha256").update(otp).digest("hex")

        // await optModel.findByIdAndUpdate(alreadyOtpSend._id, {
        //     otpHash
        // })

        // await sendEmail(email, "OTP Verification", `Your OTP code is ${otp}`, html)

        await sendOtp(email, user._id)

        res.status(200).json({
            message: "OTP send successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export async function forgotPassword(req, res) {
    try {
        const { email } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        await sendOtp(email, user._id)

        res.status(200).json({
            message: "OTP send successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export async function verifyPasswordResetOTP(req, res) {
    try {
        const { otp, email } = req.body
        const user = await userModel.findOne({
            email
        })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const otpRecord = await optModel.findOne({
            user: user._id
        })

        if (!otpRecord) {
            return res.status(400).json({
                success: false,
                message: "OTP not found"
            })
        }

        if (otpRecord.expiresAt < new Date()) {
            await optModel.deleteOne({ user: user._id })
            return res.status(400).json({
                success: false,
                message: "OTP has expired"
            })
        }

        const submittedOtpHash = crypto.createHash("sha256").update(otp.toString()).digest("hex");

        if (submittedOtpHash !== otpRecord.otpHash) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            })
        }
        const resetOTP = jwt.sign({
            id: user._id,
            tokenType: "reset"
        }, config.RESET_TOKEN, { expiresIn: "5m" })
        await optModel.deleteOne({ user: user._id })
        res.status(200).json({
            success: true,
            message: "OTP matched successfully",
            token: resetOTP
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export async function resetPassword(req, res) {
    try {
        const { password, token } = req.body

        if (!token) {
            return res.status(404).json({
                success: false,
                message: "Token not found"
            });
        }

        const decodedToken = jwt.verify(token, config.RESET_TOKEN)

        if (decodedToken.tokenType !== "reset") {
            return res.status(401).json({
                message: "Invalid reset token"
            })
        }
        console.log(decodedToken);



        const user = await userModel.findById(decodedToken.id)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        await userModel.findByIdAndUpdate(user._id, {
            password
        })

        res.status(404).json({
            success: true,
            message: "Password updated successfully",
            user
        });

        return res.status(200).json({
            success: true,
            message: "Password updated successfully"
        });
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Reset token has expired"
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                success: false,
                message: "Invalid or incorrect token"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error
        });
    }
}

export async function otpVerification(req, res) {
    const { email, otp } = req.body
    const otpHash = crypto.createHash("sha256").update(otp).digest("hex")

    const otpDoc = await optModel.findOne({
        email,
        otpHash
    })

    if (!otpDoc) {
        return res.status(401).json({
            message: "Invalid OTP"
        })
    }

    const updateUser = await userModel.findByIdAndUpdate(otpDoc.user, {
        verified: true
    })

    await optModel.deleteMany({
        user: otpDoc.user
    })

    const user = await userModel.findOne(updateUser._id)

    res.status(201).json({
        message: "Email verified successfully",
        user: {
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            verified: user.verified
        }
    })
}

export async function login(req, res) {
    const { email, password } = req.body

    const user = await userModel.findOne({ email }).select("+password")

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    if (!user.verified) {
        return res.status(401).json({
            message: "Email not verified"
        })
    }

    const hashPassword = crypto.createHash("sha256").update(password).digest("hex")
    const isPasswordValid = hashPassword === user.password

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const refreshToken = jwt.sign({
        id: user._id,
        tokenType: "refresh"
    }, config.REFRESH_TOKEN_SECRET, { expiresIn: "7d" })

    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")

    await refreshTokenModel.create({
        user: user._id,
        tokenHash: refreshTokenHash,
        familyId: crypto.randomUUID(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    })

    const accessToken = jwt.sign({
        id: user._id,
        role: user.role,
        tokenType: "access"
    }, config.ACCESS_TOKEN_SECRET, { expiresIn: "10m" })

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(200).json({
        message: "Logged in successfully",
        user: {
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
        },
        accessToken
    })
}

export async function refreshAccessToken(req, res) {
    try {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh token not found"
            })
        }

        const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET)

        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")
        const storedToken = await refreshTokenModel.findOne({
            user: decoded.id,
            tokenHash: refreshTokenHash,
            expiresAt: {$gt: new Date()}
        })

        if(!storedToken){
            return res.status(401).json({
        message: "Invalid or expired refresh token"
    })
        }
        if (decoded.tokenType !== "refresh") {
            return res.status(401).json({
                message: "Invalid refresh token"
            });
        }

        const user = await userModel.findById(decoded.id)

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        if (!user || !user.verified) {
            return res.status(401).json({
                message: "User not found or not verified"
            });
        }

        const newRefreshToken = jwt.sign({
            id: user._id,
            tokenType: "refresh"
        }, config.REFRESH_TOKEN_SECRET, { expiresIn: "7d" })

        const accessToken = jwt.sign({
            id: user._id,
            role: user.role,
            tokenType: "access"
        }, config.ACCESS_TOKEN_SECRET, { expiresIn: "10m" })
        const newRefreshTokenHash = crypto.createHash("sha256").update(newRefreshToken).digest("hex")

    await refreshTokenModel.create({
        user: user._id,
        tokenHash: newRefreshTokenHash,
        familyId: crypto.randomUUID(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    })

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            message: "Access token refreshed successfully",
            // user: {
            //     fullName: user.fullName,
            //     username: user.username,
            //     email: user.email,
            //     avatar: user.avatar,
            // },
            accessToken
        })
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired refresh token"
        });
    }
}

export async function getUser(req, res) {
    try {
        const id = req.id

        const user = await userModel.findById(id)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        res.status(200).json({
            message: "User fetched successfully",
            user: {
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export async function logout(req, res) {
    try {
        const refreshToken = req.cookies.refreshToken

        if (!refreshToken) {
            return res.status(200).json({
                message: "Already logged out"
            })
        }
        const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET)

        await refreshTokenModel.deleteOne({user: decoded.id})

        res.clearCookie("refreshToken", {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        })
        return res.status(200).json({
            message: "Logged out successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Logout failed"
        });
    }
}

export async function changePassword(req, res) {
    try {
        const { password } = req.body
        const id = req.id
        const user = await userModel.findById(id)
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const hashPassword = crypto.createHash("sha256").update(password).digest("hex")
        await userModel.updateOne(
            { _id: id },
            { $set: { password: hashPassword } }
        )
        res.status(200).json({
            message: "Passwword changes successfully",
            user,
            password
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

export async function updateProfile(req, res) {
    try {
        const userId = req.id
        const {password, role, verified, ...updateData} = req.body
        if (req.file) {
            updateData.avatar = req.file.path;
        }

        const user = await userModel.findByIdAndUpdate(userId,
            {$set: updateData},
            {
                new: true,
                runValidators: true
            }
        )

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
                message: "Profile updated successfully",
                user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}