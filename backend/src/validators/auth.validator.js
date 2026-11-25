import {body} from "express-validator"

const email = body("email").trim().notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email address").normalizeEmail()

const userName = body("username").trim().notEmpty().withMessage("Username is required")
    .isLength({min:3}).withMessage("Username must be at least 3 characters")

const password = body("password").notEmpty().withMessage("Password is required")
    .isLength({min: 6}).withMessage("Password must be at least 6 characters")

export const registerValidator = [
    body("fullName").trim().notEmpty().withMessage("Full name is required"),
    userName,
    email,
    password
]

export const otpValidator = [
    email,
    body("otp").notEmpty().withMessage("OTP is required")
    .isNumeric({no_symbols: true}).withMessage("OTP must contain only numbers")
    .isLength({min: 6, max: 6}).withMessage("OTP must be exactly 6 digits")
]

export const loginValidator = [
    email,
    password
]

export const emailValidator = [
    email
]

export const resetPasswordValidator = [
    password,
    body("token")
        .notEmpty()
        .withMessage("Token is required")
        .isJWT()
        .withMessage("Invalid JWT token")
];