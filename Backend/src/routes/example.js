// Example route
const express = require('express');
const router = express.Router();
const Example = require('../models/example');

router.get('/', async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
