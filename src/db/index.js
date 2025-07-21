import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstances = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Mongo DB connected !! DB HOST: ${connectionInstances.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connection Failed`, error);
    process.exit(1);
  }
};

export default connectDB;
