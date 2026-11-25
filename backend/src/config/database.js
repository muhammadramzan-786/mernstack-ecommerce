import mongoose from "mongoose";
import config from "./config.js";

export default async function connectDB() {
    try {
        await mongoose.connect(config.MONGODB_URI)
        console.log("database connected successfully");
        
    } catch (error) {
        console.error("Database connection failed:", error.message);
        throw error;
    }
}