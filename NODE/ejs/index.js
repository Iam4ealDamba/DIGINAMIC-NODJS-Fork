// ------ Dependences ------

require("dotenv").config();
const { url } = require("inspector");
const { default: axios } = require("axios");

const cors = require("cors");
const express = require("express");
const mongoose = require("./config/mongodb.config");

const app = express();
const port = process.env.PORT || 3001;

const IndexRouter = require("./routes/index.route");
const TodoRouter = require("./routes/todo.route");
const path = require("path");

// ------ Middlewares ------

// set the view engine to ejs
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

// ------ Routes ------

// index page

app.use("/", IndexRouter);
app.use("/api/todos", TodoRouter);

// ------ Listen ------

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on: http://localhost:${port}`);
    });
  })
  .catch((error) => {
    throw error;
  });
