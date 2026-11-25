import nodemailer from "nodemailer";
import config from "../config/config.js";

const transporter = nodemailer.createTransport({
    host: config.SMTP_Server,
    port: Number(config.Port),
    secure: false,
    auth:{
        user: config.EMAIL_USER,
        pass: config.BREVO_SMTP_KEY
    }
})

transporter.verify((error,success) => {
    if(error){
        console.error("Error connecting to email service:", error)
    }else{
        console.log("Email server is ready to send messages");
    }
})

export const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: config.EMAIL_FROM,
            to,
            subject,
            text,
            html
        })
        console.log("Email sent successfully:", info.messageId);
        return info
    } catch (error) {
        console.error("Error sending email:", error)
        throw error
    }
}