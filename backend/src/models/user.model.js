import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: [true, "Full Name is required"],
        trim: true
    },
    username:{
        type: String,
        required: [true, "User Name is required"],
        unique: true,
        trim: true,
        lowercase: true
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        select: false,
        minlength:6
    },
    avatar:{
        type: String,
        default: ""
    },
    role:{
        type: String,
        enum:["Admin", "Customer"],
        default:"Customer"
    },
    verified: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

const userModel = mongoose.model("User", userSchema)

export default userModel