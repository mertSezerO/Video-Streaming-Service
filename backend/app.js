const express = require("express");
const app = express();

require("dotenv").config();

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);

app.use(express.static("controllers/"));
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => {
  console.log("Listening on Port: " + process.env.BACKEND_PORT);
});
