import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Clintroute from "./controller/router/clint/UserRoute.js";
import { clint_login } from "./controller/auth/auth.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ MongoDB connected...");
  } catch (error) {
    console.error("❌ Database not connected:", error.message);
    process.exit(1);
  }
};

connectDB();

app.use("/user",Clintroute)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🔥 Server is running on port ${PORT}`);
});