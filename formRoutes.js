const express = require('express');
// const { submitForm } = require('../controllers/formController');
const { submitForm, getAllForms, deleteForm } = require('../controllers/formController');

const router = express.Router();

// POST: Submit Form
router.post('/submit-form', submitForm);


// const { getAllForms } = require('../controllers/formController');

// GET: Fetch all forms
router.get('/forms', getAllForms);


router.delete('/forms/:id', deleteForm); // Route to delete a form by ID


module.exports = router;
