// NewsArticle Mongoose model
const mongoose = require('mongoose');

const NewsArticleSchema = new mongoose.Schema({
  article_id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  link: { type: String, required: true },
  keywords: [{ type: String }],
  creator: [{ type: String }],
  description: { type: String },
  content: { type: String },
  pubDate: { type: String },
  pubDateTZ: { type: String },
  image_url: { type: String },
  video_url: { type: String },
  source_id: { type: String },
  source_name: { type: String },
  source_priority: { type: Number },
  source_url: { type: String },
  source_icon: { type: String },
  language: { type: String },
  country: [{ type: String }],
  category: [{ type: String }],
  duplicate: { type: Boolean }
});

module.exports = mongoose.model('Article', NewsArticleSchema);
