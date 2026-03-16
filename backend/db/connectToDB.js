import mongoose from "mongoose"


const conectionToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MONGODB");
    } catch (error) {
        console.log("Error connecting to DB", error.message);

    }
}

export default conectionToDb