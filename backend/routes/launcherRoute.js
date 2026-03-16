import express from "express"
import { getById } from "../controllers/getLauncherById.js"
import { getAllRockets } from "../controllers/getAllLauncers.js"
import { addNewRocket } from "../controllers/addLauncher.js"
import { deleteRocket } from "../controllers/deleteRocket.js"

const router = express.Router()

router.get("/", getAllRockets)

router.get("/:id", getById)

router.post("/", addNewRocket)

router.delete("/:id", deleteRocket)

export default router