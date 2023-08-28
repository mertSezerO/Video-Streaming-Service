const Movie = require("../models/movie");

exports.getMovieWithCredits = (req, res, next) => {
  const movieId = req.params.movieId;
  Movie.findOne({ _id: movieId })
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

exports.getPopularMovies = (req, res, next) => {
  Movie.find()
    .sort({ popularity: -1 })
    .limit(20)
    .then((movies) => {
      return res.status(200).json({
        movies: movies,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        errorMessage: "A problem occured",
      });
    });
};

exports.filterMovies = (req, res, next) => {
  const { search } = req.query;
  //use aggregate with priority numbers
  Movie.find({
    $or: [
      { original_title: { $regex: new RegExp(search, "i") } },
      { "keywords.name": { $regex: new RegExp(search, "i") } },
      { "genres.name": { $regex: new RegExp(search, "i") } },
    ],
  })
    .limit(30)
    .then((movies) => {
      return res.status(200).json({
        movies: movies,
      });
    })
    .catch((err) => {
      console.log("There is an error occured");
      return res.status(500).json({
        errorMessage: err,
      });
    });
};

exports.getGenreMovies = (req, res, next) => {
  const { genre } = req.query;
  Movie.find({ "genres.name": genre })
    .limit(30)
    .then((movies) => {
      return res.status(200).json({
        movies: movies,
      });
    })
    .catch((err) => {
      console.log("There is an error occured");
      return res.status(500).json({
        errorMessage: err,
      });
    });
};

exports.getRecentlyAddedMovies = (req, res, next) => {
  Movie.find()
    .sort({ release_date: -1 })
    .limit(10)
    .then((movies) => {
      return res.status(200).json({
        movies: movies,
      });
    })
    .catch((err) => {
      console.log("There is an error occured");
      return res.status(500).json({
        errorMessage: err,
      });
    });
};
