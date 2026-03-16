import Rocket from "../models/rocketModel.js";

export const getAllRockets = async (req, res) => {
    
    try {
        const all_rockets = await Rocket.find()
        res.status(200).json({message: "success", rockets: all_rockets})
    } catch (error) {
        res.status(500).json({message: "Faild", error: error.message})
    }
}
