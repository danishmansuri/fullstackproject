const express = require("express");
const multer = require("multer");
const Client = require("../models/Client"); // Correct import
const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Route to add a new client
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const client = new Client({
      name,
      description,
      designation,
      image: `/uploads/${req.file.filename}`, // Store file path
    });
    await client.save();
    res.status(201).json({ message: "Client added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add client" });
  }
});

// Route to get all clients
router.get("/all", async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients); // Fixed: Return `clients` instead of `clientRoutes`
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch clients" });
  }
});

module.exports = router;
