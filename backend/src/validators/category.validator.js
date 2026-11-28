import { body } from "express-validator";

export const createCatValidator = [
    body("name").isString().withMessage("Category name must be a string").trim().notEmpty().withMessage("Category name is required"),
    body("slug").isString().withMessage("Category slug must be a string").trim().notEmpty().withMessage("Category slug is required"),
]