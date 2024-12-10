const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");
const formRoutes = require("./routes/formRoutes");
const clientRoutes = require("./routes/clientRoutes");

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the "uploads" directory
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/projects", projectRoutes);


// form route
app.use('/api', formRoutes);


// client form
app.use("/api/clients", clientRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
