import cookieParser from "cookie-parser"
import express from "express"
import morgan from "morgan"
import authRouter from "./routes/auth.routes.js"
import productRouter from "./routes/product.routes.js"
import cors from "cors"
import categoryRoutes from "./routes/category.routes.js"

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/product", productRouter)
app.use("/api/category", categoryRoutes)

export default app