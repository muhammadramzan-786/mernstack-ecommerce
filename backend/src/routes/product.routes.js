import { Router } from "express";
import { getProducts } from "../controller/product.controller.js";

const productRouter = Router()

productRouter.get("/getProducts", getProducts)

export default productRouter