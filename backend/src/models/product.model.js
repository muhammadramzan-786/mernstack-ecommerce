import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Product Name is required"],
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
    price:{
        type: Number,
        required: [true, "Product price is required"],
        min: 0
    },
    discountPrice:{
        type: Number,
        min: 0,
        default: null
    },
    images:{
        type: [String],
        default: []
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Category is required"],
    },
    stock:{
        type: Number,
        required: [true, "Product stock is required"],
        min: 0,
        validate: Number.isInteger
    },
    brand:{
        type: String,
        trim: true
    },
    sku:{
        type: String,
        unique: true,
        sparse: true,
        trim: true
    },
    isActive:{
       type: Boolean,
       default:true 
    }
},{
    timestamps: true
})

const productModel = mongoose.model("Product", productSchema)

export default productModel