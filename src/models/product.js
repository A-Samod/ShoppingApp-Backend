const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  description: { type: String },
  price: { type: String },
  category: { type: String },
  size: { type: String },
  color: { type: String },
  image: { type: String },
  quantity: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", ProductSchema);
