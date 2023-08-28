const Router = require("express").Router();
const movieController = require("../controllers/movie");

Router.get("/populars", movieController.getPopularMovies);

Router.get("/genres", movieController.getGenreMovies);

Router.get("/recent", movieController.getRecentlyAddedMovies);

module.exports = Router;
