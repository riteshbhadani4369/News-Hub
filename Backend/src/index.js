// Entry point for the application
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('./config/db');

app.use(express.json());

// News route
const newsRoute = require('./routes/newsArticle');
app.use('/api/news', newsRoute);

app.get('/', (req, res) => {
  res.send('News Hub API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
