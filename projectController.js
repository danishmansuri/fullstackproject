const Project = require("../models/project");

const createProject = async (req, res) => {
  const { name, description } = req.body;
  const image = req.file ? `uploads/${req.file.filename}` : null;

  if (!name || !description || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newProject = new Project({ name, description, image });
    await newProject.save();
    res.status(201).json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Error creating project" });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Error fetching projects" });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully", project: deletedProject });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ message: "Error deleting project", error });
  }
};

module.exports = { createProject, getProjects, deleteProject };
