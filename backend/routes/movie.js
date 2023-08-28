const Router = require("express").Router();
const movieController = require("../controllers/movie");

Router.get("/movies/:movieId", movieController.getMovieWithCredits);

Router.get("/populars", movieController.getPopularMovies);

Router.get("/movies", movieController.filterMovies);

module.exports = Router;
