import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/DevOps");
    console.log("MongoDB connected");
  } catch (e) {
    console.log(e);
  }
};
