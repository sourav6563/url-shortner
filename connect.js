import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log(`mongodb is connected successfully bro`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export { connectDB };
//
