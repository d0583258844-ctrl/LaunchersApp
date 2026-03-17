import express from "express"
import { createUser, deleteUser, getCurrentUser, login, updateUser } from "../controllers/authControllers.js"


const router = express.Router()

router.get("/getUser", getCurrentUser)

router.post("/register/create", createUser)

router.put("/register/update", updateUser)

router.delete("/register/delete/:id", deleteUser)

router.post("/login", login)

export default router

