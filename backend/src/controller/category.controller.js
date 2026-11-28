import categoryModel from "../models/category.model.js"

export async function createCat(req, res) {
    try {
        const {
            name,
            slug,
            description,
            image,
            parentCategory,
            isActive
        } = req.body;

        const category = await categoryModel.create({
            name,
            slug,
            description,
            image,
            parentCategory,
            isActive
        });

        return res.status(201).json({
            success: true,
            message: "Category created successfully",
            category
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}