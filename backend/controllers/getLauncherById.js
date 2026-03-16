import Rocket from "../models/rocketModel.js"

export const getById = async (req, res) => {

    const { id } = req.query

    try {
        if (!id) {
            return res.status(404).json({ message: "ID missing" })
        }
        const specific_rocket = await Rocket.findOne({ _id: id })
        if (!specific_rocket) {
            res.status(400).json({ message: `Rocket by id: ${id} Not Found` })
        }
        res.status(200).json({ message: "success", rocket: specific_rocket })
    } catch (error) {
        res.status(500).json({ message: "error", info: error.message })
    }
}
