import mongoose from "mongoose";

const rocketSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    rocketType: {
        type: String,
        enum: ["Shahab3", "Fetah110", "Radwan", "Kheibar"]
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    city: {
        type: String
    }
})

const Rocket = mongoose.model("Rocket", rocketSchema)

export default Rocket