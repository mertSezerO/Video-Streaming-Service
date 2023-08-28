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
  const { regex } = req.query;
  Movie.find({ original_title: { $regex: new RegExp(regex, "i") } })
    .limit(10)
    .then((titleMovies) => {
      const titleExtras = 10 - titleMovies.length;
      let movies = [...titleMovies];

      Movie.find({ "keywords.name": { $regex: new RegExp(regex, "i") } })
        .skip(10 - titleExtras)
        .limit(10 + titleExtras)
        .then((keywordMovies) => {
          const keywordExtras = 10 - keywordMovies.length;
          movies = [...movies, keywordMovies];

          Movie.find({ "genres.name": { $regex: new RegExp(regex, "i") } })
            .skip(10 - keywordExtras)
            .limit(10 + keywordExtras)
            .then((genreMovies) => {
              console.log("Genre Movies: " + genreMovies);
              movies = [...movies, genreMovies];
              return res.status(200).json({
                movies: movies,
              });
            })
            .catch((err) => {
              console.log("There is an error in genre search: " + err);
              return res.status(500).json({
                errorMessage: err,
              });
            });
        })
        .catch((err) => {
          console.log("There is an error in keyword search: " + err);
          return res.status(500).json({
            errorMessage: err,
          });
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
