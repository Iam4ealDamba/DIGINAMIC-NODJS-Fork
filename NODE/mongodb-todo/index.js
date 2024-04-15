// ------ Dependences ------

require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("./config/mongodb.config");

const app = express();
const port = process.env.PORT || 3001;

const TodoRouter = require("./routes/todo.route");

// ------ Middlewares ------

app.use(cors());
app.use(express.json());

// ------ Routes ------

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
