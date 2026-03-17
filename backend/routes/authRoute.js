import express from "express"
import { createUser, deleteUser, getCurrentUser, login, updateUser } from "../controllers/authControllers.js"
import { auth } from "../utils/middleware.js"


const router = express.Router()

router.post("/login", login)

router.get("/getUser", getCurrentUser)

router.post("/register/create", auth(["administrator user"]), createUser)

router.put("/register/update", auth(["administrator user"]), updateUser)

router.delete("/register/delete/:id", auth(["administrator user"]), deleteUser)


export default router