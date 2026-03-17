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
        }
        const newUser = await User.create({ username, password, email, user_type, last_login })
        res.status(201).json({ message: "User created seccefully", user: newUser })
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
        user.last_login = new Date()
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
    const { id } = req.query
    const user = await User.findById({ _id: id })

    try {
        if (!user) {
            return res.status(402).json({ message: `User with id: ${id} Not Found` })
        }
        await User.deleteOne({ _id: user.id })
        res.status(203).json({ message: "User deleted seccessfuly", user: user })

    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message })
    }
}

export const updateUser = async (req, res) => {
    const { id, username, password, email, user_type } = req.body
    const user = await User.findById(id)
    try {
        if (!user) {
            res.status(400).json({ message: "User not found" })
        }
        const newUserData = { username: username || user.username, password: password || user.password, email: email || user.email, user_type: user_type || user.user_type, last_login: user.last_login, _id: user._id }
        const updatedUser = await User.findByIdAndUpdate(id, newUserData)
        console.log(updatedUser);
        console.log(newUserData);

        res.status(201).json({ message: "Updated", info: newUserData })

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const getCurrentUser = async (req, res) => {
    try {

    } catch (error) {

    }
}