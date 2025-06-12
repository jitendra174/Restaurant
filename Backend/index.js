require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const useRoute = require("./Router/router");

const app = express();
const port = process.env.PORT || 5000;
const url = process.env.DATABASE_URL;

// Middleware
app.use(
  cors({
    origin: "https://nexus-project-2-restaurant-website.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

// MongoDB Connection (simplified for modern Mongoose)
mongoose.connect(url)
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.error("❌ DB connection error:", err));

// Routes
app.use("/api", useRoute); // Consider using '/api' prefix for API routes

// Health check endpoint
app.get("/", (req, res) => {
  res.status(200).json({ status: "Server is running" });
});

// Server start
app.listen(port, () => {
  console.log(`🚀 Server successfully running on port: ${port}`);
  console.log("📦 DATABASE_URL = ", url); // Moved inside listener for better logging
});