const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  _id: {
    type: Number,
    require: true,
    unique: true,
  },
  todo: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  type: {
    type: String,
  },
  star: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
