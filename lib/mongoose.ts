import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URI) {
        throw new Error("Missing MONGO_URI");
    }

    if (isConnected) {
        return console.log("MongoDB is already connected");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "next-course",
        });

        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
};
