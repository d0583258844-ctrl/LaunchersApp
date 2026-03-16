import Rocket from "../models/rocketModel.js";

export const deleteRocket = async (req, res) => {
    const {id} = req.query
    try {
        if (!id) {
            return res.status(404).json({ message: "ID missing" })
        }
        const deleted_rocket = await Rocket.findOneAndDelete({ _id: id })
        if (!deleted_rocket) {
            res.status(400).json({ message: `Rocket by id: ${id} Not Found` })
        }
        res.status(200).json({ message: "rocket deleted", rocket: deleted_rocket })
    } catch (error) {
        res.status(500).json({ message: "error", info: error.message })
    }
}