import express from "express"
import dotenv from "dotenv"
import conectionToDb from "./db/connectToDB.js"
import launcherRoutes from "./routes/launcherRoute.js"

dotenv.config()
const port = process.env.PORT

const app = express()

app.use(express.json())

app.use("/api/launchers", launcherRoutes)

app.listen(port, () => {
    conectionToDb()
    console.log(`Server runing on port:${port}`);
})