import { Router } from "express";
import { login, otpVerification, register, getUser, resendOTP, verifyPasswordResetOTP, resetPassword, forgotPassword, refreshAccessToken, logout, changePassword } from "../controller/auth.controller.js";
import { emailValidator, loginValidator, otpValidator, registerValidator, resetPasswordValidator } from "../validators/auth.validator.js";
import { validate } from "../middleware/validate.middleware.js";
import { validateToken } from "../middleware/validateToken.middleware.js";


const authRouter = Router()

authRouter.post("/register",registerValidator, validate, register)
authRouter.post("/resend-otp", emailValidator, resendOTP)

authRouter.post("/resend-otp", emailValidator, resendOTP)

authRouter.post("/forgot-password", emailValidator, validate, forgotPassword)

authRouter.post("/verify-reset-otp", otpValidator, validate, verifyPasswordResetOTP)

authRouter.post("/reset-password", resetPasswordValidator, validate, resetPassword)

authRouter.get("/otpverification", otpValidator, validate, otpVerification)

authRouter.post("/login", loginValidator, validate, login)

authRouter.get("/access-token", refreshAccessToken)
authRouter.get("/getUser", validateToken, getUser)

authRouter.get("/logout", logout)

authRouter.post("/change-password", validateToken, changePassword)



export default authRouter