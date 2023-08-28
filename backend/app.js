const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

app.use(express.static("controllers/"));
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:5001",
    credentials: true,
  })
);

const movieRouter = require("./routes/movie");
app.use("/movies", movieRouter);

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("CONNECTED TO MONGODB");
  })
  .then(() => {
    app.listen(process.env.BACKEND_PORT, () => {
      console.log("Listening on Port: " + process.env.BACKEND_PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
