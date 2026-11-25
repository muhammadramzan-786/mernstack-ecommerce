
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: 1,
        max: 5,
        validate: Number.isInteger
    },

    title: {
        type: String,
        trim: true
    },

    comment: {
        type: String,
        required: [true, "Review comment is required"],
        trim: true
    },

    isVerifiedPurchase: {
        type: Boolean,
        default: false
    },

    isApproved: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

// One review per user for each product
reviewSchema.index(
    { user: 1, product: 1 },
    { unique: true }
);

const reviewModel = mongoose.model("Review", reviewSchema);

export default reviewModel;
