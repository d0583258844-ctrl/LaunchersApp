import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    email: {
        type: String
    },
    user_type: {
        type: String,
        required: true,
        enum: ["administrator user", "air force user", "intelligence force user"]
    },
    last_login: {
        type: String,
        default: Date,
        required: false,
    }
})

const User = mongoose.model("User", userSchema)

export default User