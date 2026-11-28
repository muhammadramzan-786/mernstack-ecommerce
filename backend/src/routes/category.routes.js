import { Router } from "express";
import { createCatValidator } from "../validators/category.validator.js";
import { createCat } from "../controller/category.controller.js";

const categoryRoutes = Router()

categoryRoutes.post("/create-category", createCatValidator, createCat)

export default categoryRoutes