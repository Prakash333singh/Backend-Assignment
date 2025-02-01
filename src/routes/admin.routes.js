const express = require('express');
const router = express.Router();
const FAQ = require('../models/faq.model');
const auth = require('../middleware/auth');

// Admin authentication
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Add your authentication logic here
  // Return JWT token on successful login
});

// Protected admin routes
router.use(auth);

// Get all FAQs with translations
router.get('/faqs', async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ createdAt: -1 });
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update FAQ
router.put('/faqs/:id', async (req, res) => {
  try {
    const faq = await FAQ.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(faq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete FAQ
router.delete('/faqs/:id', async (req, res) => {
  try {
    await FAQ.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;