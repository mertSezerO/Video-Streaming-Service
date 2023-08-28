const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const creditSchema = new Schema({
  movie_id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  cast: {
    type: Array,
    required: true,
  },
  crew: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Credit", creditSchema);
