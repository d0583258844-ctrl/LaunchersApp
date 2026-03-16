import Rocket from "../models/rocketModel.js";

export const addNewRocket = async (req, res) => {
    const { name, rocketType, latitude, longitude, city } = req.body
    try {
        if (!name || !rocketType || !latitude || !longitude || !city) {
            res.status(400).json({ message: "Error", info: "All fields required" })
        }
        const newRocket = await Rocket.create({ name, rocketType, latitude, longitude, city })
        res.status(200).json({ message: "rocket add seccessfuly", rocketAdd: newRocket })
    } catch (error) {
        res.status(500).json({ message: "Faild", error: error.message })
    }
}
