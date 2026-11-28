import productModel from "../models/product.model.js"

export async function getProducts(req,res) {
    try {
        const products = await productModel.find()

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            products
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}