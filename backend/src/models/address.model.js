import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },
    fullname:{
        type: String,
        required: [true, "Address Name is required"],
        trim: true
    },
    phone:{
        type: String,
        required: true,
        trim: true,
    },
    country:{
        type: String,
        default: 'Pakistan',
        required: [true, "Country is required"],
        trim: true
    },
    city:{
        type: String,
        required: [true, "City is required"],
        trim: true
    },
    state:{
        type: String,
        required: [true, "State is required"],
        trim: true
    },
    postalCode:{
        type: String,
        required: [true, "Postal code is required"],
        trim: true
    },
    completeAddress:{
        type: String,
        required: [true, "Complete address is required"],
        trim: true
    },
    addressType:{
        type: String,
        required: [true, "Address type is required"],
        enum: ["Home", "Office"],
        default: 'Home',
    },
},{
    timestamps: true
})

const addressModel = mongoose.model("Address", addressSchema)

export default addressModel