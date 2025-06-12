require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const useRoute = require('./api/router');

const app = express();
const port = process.env.PORT || 5000;
const url = process.env.DATABASE_URL;

// Middleware
app.use(
  cors({
    origin: [
  "http://localhost:5173", // ✅ Correct local frontend port (Vite default)
  "https://restaurant-agkl.vercel.app"
],

    credentials: true,
  })
);

app.use(express.json());

// ✅ Use the correct variable name
// Removed: app.use("/router", router);
// If you want to keep it: app.use("/router", useRoute);

app.use("/api", useRoute); // Mount API routes under '/api'

// MongoDB Connection
mongoose.connect(url)
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.error("❌ DB connection error:", err));

// Health check
app.get("/", (req, res) => {
  res.status(200).json({ status: "Server is running" });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server successfully running on port: ${port}`);
  console.log("📦 DATABASE_URL = ", url);
});
