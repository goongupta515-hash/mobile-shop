import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

// Load environment variables
dotenv.config();


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
console.log("Registering product routes...");
app.use("/api/products", productRoutes);  
console.log("Product routes registered.");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("========== FULL ERROR ==========");
    console.dir(err, { depth: null });
    console.log("================================");
  });

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});