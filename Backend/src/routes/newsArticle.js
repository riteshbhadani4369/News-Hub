// News routes
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Create a news article
router.post('/', newsController.createNews);

// Get all news articles
router.get('/', newsController.getAllNews);

// Get news article by ID
router.get('/:id', newsController.getNewsById);

// Update news article by ID
router.put('/:id', newsController.updateNews);

// Delete news article by ID
router.delete('/:id', newsController.deleteNews);

module.exports = router;
