import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[true, "Email is required"]
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },
    otpHash: {
        type: String,
        required: [true, "Otp hash is required"]
    },
    expiresAt: {
    type: Date,
    required: true,
    expires: 0
}
},{
    timestamps: true
})

const optModel = mongoose.model("Otp", otpSchema)

export default optModel