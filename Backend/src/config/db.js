// MongoDB Atlas connection
const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'your-mongodb-atlas-uri-here';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
