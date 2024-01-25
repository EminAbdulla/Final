const mongoose = require("mongoose");
const Final = mongoose.model(
  "Final",
  new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    rating: Number,
    discount: Number,
  })
);
module.exports = { Final };
