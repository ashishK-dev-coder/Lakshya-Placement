import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log('Failed to connect', error);
    }
}
export default connectDB;