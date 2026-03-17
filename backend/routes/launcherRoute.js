import express from "express"
import { getById } from "../controllers/getLauncherById.js"
import { getAllRockets } from "../controllers/getAllLauncers.js"
import { addNewRocket } from "../controllers/addLauncher.js"
import { deleteRocket } from "../controllers/deleteRocket.js"
import { auth } from "../utils/middleware.js"

const router = express.Router()

router.get("/", auth(["administrator user", "air force user", "intelligence force user"]), getAllRockets)

router.get("/:id", getById)

router.post("/", auth(["intelligence force user", "administrator user"]), addNewRocket)

router.delete("/:id", auth(["intelligence force user", "administrator user"]), deleteRocket)

export default router