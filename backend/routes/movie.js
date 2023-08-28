const Router = require("express").Router();
const movieController = require("../controllers/movie");

Router.get("/movies/:movieId", movieController.getMovieWithCredits);

module.exports = Router;
