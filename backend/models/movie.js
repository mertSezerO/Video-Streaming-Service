const mongoose = require("mongoose");
const credit = require("./credit");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const movieSchema = new Schema(
  {
    genres: {
      type: Array,
    },
    id: {
      type: Number,
    },
    keywords: {
      type: Array,
    },
    overview: {
      type: String,
    },
    production_companies: {
      type: Array,
    },
    revenue: {
      type: Number,
    },
    runtime: {
      type: Number,
    },
    original_language: {
      type: String,
    },
    original_title: {
      type: String,
    },
    popularity: {
      type: Number,
    },
    release_date: {
      type: Date,
    },
    spoken_languages: {
      type: Array,
    },
    title: {
      type: String,
    },
    vote_average: {
      type: Number,
    },
  },
  opts
);

movieSchema.virtual("credits", {
  ref: credit,
  localField: "id",
  foreignField: "movie_id",
});

module.exports = mongoose.model("Movie", movieSchema);
