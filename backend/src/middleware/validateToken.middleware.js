import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const validateToken = async (req, res, next) => {
    try {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message: "Token not found"
        })
    }

    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET)
        if(!decoded){
            return res.status(401).json({
                message: "Wrong token"
            })
        }
        if(decoded.tokenType !== "access"){
        return res.status(401).json({
            message: "Invalid access token"
        })
    }

    req.id = decoded.id

    next()
    } catch (error) {
        return res.status(401).json({
            message: error.name === "TokenExpiredError" ? "Token expired" : "Invalid token"
        })
    }
}