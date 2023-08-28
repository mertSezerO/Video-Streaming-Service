const Movie = require("../models/movie");

exports.getMovieWithCredits = (req, res, next) => {
  const movieId = req.params.movieId;
  console.log(movieId);
  Movie.findOne({ _id: parseInt(movieId) })
    .populate("credits")
    .then((movies) => {
      return res.status(200).json({
        movies: movies,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
