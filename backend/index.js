import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import conectionToDb from "./db/connectToDB.js"
import launcherRoutes from "./routes/launcherRoute.js"
import authRoutes from "./routes/authRoute.js"
import cookieParser from "cookie-parser"

dotenv.config()
const port = process.env.PORT

const app = express()

app.use(express.json())

app.use(cookieParser())

app.use(cors())

app.use("/api/launchers", launcherRoutes)

app.use("/api/auth", authRoutes)

app.listen(port, () => {
    conectionToDb()
    console.log(`Server runing on port:${port}`);
})