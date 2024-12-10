const express = require("express");
const multer = require("multer");
const { getProjects, createProject ,deleteProject } = require("../controllers/projectController");

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

// Routes
router.get("/", getProjects); // GET all projects
router.post("/", upload.single("image"), createProject); // POST new project
router.delete("/:id", deleteProject);

module.exports = router;
