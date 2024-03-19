import mongoose from "mongoose";

const connectToMongoDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Mongo DB connected");
    } catch (error) {
        console.log("Error connecting Mongo DB", error.message);
    }
}

export default connectToMongoDb;