import User from "../models/userModel.js"


export const createUser = async (req, res) => {
    const { username, password, email, user_type, last_login } = req.body
    try {
        if (! username || !password || !email || !user_type) {
            res.status(400).message("One field or more is missing.")
        }
        const newUser = await User.create({username, password, email, user_type, last_login})
        res.status(201).json({message: "User created seccefully", user: newUser})
    } catch (error) {
        res.status(500).json({ message: "Failed", error: error.message })
    }
}

export const login = async (req, res) => {
    const { username, password, email, user_type, last_login } = req.body
    try {

    } catch (error) {

    }
}

export const deleteUser = async (req, res) => {
    const { id } = res.query
    try {

    } catch (error) {

    }
}

export const updateUser = async (req, res) => {
    const { username, password, email, user_type, last_login } = req.body
    try {

    } catch (error) {

    }
}