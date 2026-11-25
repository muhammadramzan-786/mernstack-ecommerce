import crypto from "crypto";
import optModel from "../models/otp.model.js";
import { generateOtp, getOtpHtml } from "../utils/utils.js";
import { sendEmail } from "./email.service.js";

export async function sendOtp(email, userId) {

    const otp = generateOtp();

    const html = getOtpHtml(otp);

    const otpHash = crypto
        .createHash("sha256")
        .update(otp.toString())
        .digest("hex");

    await optModel.findOneAndUpdate(
        { user: userId },
        {
            email,
            user: userId,
            otpHash,
            expiresAt: new Date(Date.now() + 5 * 60 * 1000)
        },
        {
            upsert: true,
            new: true,
            runValidators: true
        }
    );

    await sendEmail(
        email,
        "OTP Verification",
        `Your OTP code is ${otp}`,
        html
    );

    return true;
}
