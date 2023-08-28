const Router = require("express").Router();

const movieController = require("../controllers/movie");
const searchRouter = require("./search");

Router.get("/:movieId", movieController.getMovieWithCredits);

Router.get("/", movieController.filterMovies);

Router.use("/find", searchRouter);

module.exports = Router;
