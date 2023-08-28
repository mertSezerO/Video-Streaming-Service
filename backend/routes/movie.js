const Router = require("express").Router();
const movieController = require("../controllers/movie");

Router.get("/:movieId", movieController.getMovieWithCredits);

Router.get("/find/populars", movieController.getPopularMovies);

Router.get("/", movieController.filterMovies);

module.exports = Router;
