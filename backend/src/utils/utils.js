export function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString()
}

export function getOtpHtml(otp) {
    return `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 30px; background-color: #f9f9f9; border-radius: 10px; text-align: center;">

            <h2 style="color: #333;">Email Verification</h2>

            <p style="color: #555; font-size: 16px;">
                Thank you for registering! Use the OTP below to verify your email address.
            </p>

            <div style="background-color: #ffffff; padding: 20px; margin: 25px 0; border-radius: 8px;">
                <h1 style="color: #2563eb; letter-spacing: 8px; font-size: 32px;">
                    ${otp}
                </h1>
            </div>

            <p style="color: #777; font-size: 14px;">
                This OTP is valid for 5 minutes.
            </p>

            <p style="color: #999; font-size: 12px;">
                If you did not request this OTP, please ignore this email.
            </p>

        </div>`
}