const Router = require("express").Router();
const movieController = require("../controllers/movie");

Router.get("/populars", movieController.getPopularMovies);

Router.get("/genres", movieController.getGenreMovies);

module.exports = Router;
