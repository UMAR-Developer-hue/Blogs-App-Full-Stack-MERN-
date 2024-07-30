const mongoose = require("mongoose");

let BlogSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: String,
  category_id:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  users_id:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  craeted_at: {
    type: Date,
    default: Date.now,
    required: true
  },
  updated_at: {
    type: Date,
    required: true

  }
});

module.exports = mongoose.model("blogs", BlogSchema);
