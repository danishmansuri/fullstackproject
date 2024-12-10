const Form = require('../models/Form');

// Submit Form Data
const submitForm = async (req, res) => {
  const { fullname, email, mobile, city } = req.body;

  if (!fullname || !email || !mobile || !city) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newForm = new Form({ fullname, email, mobile, city });
    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already exists' });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Fetch All Form Submissions
const getAllForms = async (req, res) => {
    try {
      const forms = await Form.find();
      res.status(200).json(forms);
    } catch (error) {
      console.error('Error fetching forms:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  const deleteForm = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedForm = await Form.findByIdAndDelete(id);
  
      if (!deletedForm) {
        return res.status(404).json({ message: "Form not found" });
      }
  
      res.status(200).json({ message: "Form deleted successfully" });
    } catch (error) {
      console.error("Error deleting form:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  module.exports = { submitForm, getAllForms, deleteForm };
  