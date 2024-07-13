const express = require('express');
const Design = require('../models/Design');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Save Design
router.post('/save', authMiddleware, async (req, res) => {
  const { components } = req.body;
  const userId = req.user.id;

  try {
    const design = new Design({ userId, components });
    await design.save();
    res.status(201).json({ message: 'Design saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
});

// Load Design
router.get('/load', authMiddleware, async (req, res) => {
  const userId = req.user.id;

  try {
    const design = await Design.findOne({ userId });
    if (!design) {
      return res.status(404).json({ message: 'Design not found' });
    }

    res.json(design.components);
  } catch (err) {
    res.status(500).json({ message: 'Server error', err });
  }
});

module.exports = router;
