// ------ Dependences ------

require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const TodoRouter = require("./routes/todo.route");

// ------ Middlewares ------

app.use(cors());
app.use(express.json());

// ------ Routes ------

app.use("/api/todos", TodoRouter);

// ------ Listen ------

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
