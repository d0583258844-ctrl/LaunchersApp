import jwt from "jsonwebtoken";

export const auth = (roles) =>  (req, res, next) => {
    const token = req.cookies.token
    try {
        if (!token) {
            res.status(401).send("No token given. unauthraized")
        }
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(402).json({ message: "error", info: err.message })
            }
            if (!roles.includes(decoded.user_type)) {
                res.status(401).send("Not authorized")
            }
            req.user = decoded.id
        })
        next()
    } catch (error) {
        res.status(500).json({ message: "error", info: error.message })
    }
}

export const checkAuthIntelligence = (req, res, next) => {
    const token = req.cookies.token
    try {
        if (!token) {
            res.status(401).send("No token given. unauthraized")
        }
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(402).json({ message: "error", info: err.message })
            }
            if (decoded?.user_type !==  "intelligence force user") {
                res.status(401).send("Only administrator can create a new user")
            }
            req.user = decoded.id
        })
        next()
    } catch (error) {
        res.status(500).json({ message: "error", info: error.message })
    }
}

export const checkAuthAirForce = (req, res, next) => {
    const token = req.cookies.token
    try {
        if (!token) {
            res.status(401).send("No token given. unauthraized")
        }
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(402).json({ message: "error", info: err.message })
            }
            if (decoded?.user_type !==  "air force user") {
                res.status(401).send("Only  can create a new user")
            }
            req.user = decoded.id
        })
        next()
    } catch (error) {
        res.status(500).json({ message: "error", info: error.message })
    }
}
