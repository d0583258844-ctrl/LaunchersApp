import User from "../models/userModel.js"
import jwt from "jsonwebtoken"

export const createUser = async (req, res) => {
    const { username, password, email, user_type, last_login } = req.body

    try {
        if (!username || !password || !email || !user_type) {
            return res.status(400).send("One field or more is missing.")
        }

        const userExsits = await User.findOne({ user_type: user_type })
        if (userExsits) {
            res.send(`Error: User with user type: ${user_type} alreday exsits`)

            const newUser = await User.create({ username, password, email, user_type, last_login })
            res.status(201).json({ message: "User created seccefully", user: newUser })
        }
    } catch (error) {
        res.status(500).json({ message: "Failed", error: error })
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body

    try {
        if (!username || !password) {
            return res.status(400).send("One field or more is missing.")
        }

        const user = await User.findOne({ username: username })
        if (!user) {
            return res.status(401).json({ message: `Error: User with user name: ${username} Not Found` })
        }

        const token = jwt.sign({ id: user._id, user_type: user.user_type }, process.env.SECRET_KEY, { expiresIn: '1h' })

        res.status(201).cookie("token", token, { httpOnly: true }).json({ message: "Login seccesfully", user: user })
    } catch (error) {
        res.status(500).json({ message: "Login Failed", error: error })
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

export const getCurrentUser = async (req, res) => {
    try {

    } catch (error) {

    }
}