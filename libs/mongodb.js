// libs/mongodb.js
import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      // Already connected
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectMongoDB;
