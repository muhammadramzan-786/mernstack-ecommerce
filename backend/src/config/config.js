import dotenv from "dotenv";

dotenv.config()

if(!process.env.MONGODB_URI){
    throw new Error("MONGODB_URI is not defined in environment variable") 
}

if(!process.env.ACCESS_TOKEN_SECRET){
    throw new Error("ACCESS_TOKEN_SECRET is not defined in environment variable") 
}

if(!process.env.REFRESH_TOKEN_SECRET){
    throw new Error("REFRESH_TOKEN_SECRET is not defined in environment variable") 
}

if(!process.env.EMAIL_USER){
    throw new Error("EMAIL_USER is not defined in environment variable") 
}

if(!process.env.BREVO_SMTP_KEY){
    throw new Error("BREVO_SMTP_KEY is not defined in environment variable") 
}

if(!process.env.EMAIL_FROM){
    throw new Error("EMAIL_FROM is not defined in environment variable") 
}

if(!process.env.SMTP_Server){
    throw new Error("SMTP_Server is not defined in environment variable") 
}

if(!process.env.Port){
    throw new Error("Port is not defined in environment variable") 
}

if(!process.env.RESET_TOKEN){
    throw new Error("RESET_TOKEN is not defined in environment variable") 
}

const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    EMAIL_USER: process.env.EMAIL_USER,
    BREVO_SMTP_KEY: process.env.BREVO_SMTP_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    SMTP_Server: process.env.SMTP_Server,
    Port: process.env.Port,
    RESET_TOKEN: process.env.RESET_TOKEN
}

export default config