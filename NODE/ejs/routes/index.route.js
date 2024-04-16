const Router = require("express").Router();
const IndexController = require("../controllers/index.controller");

// ------ Routes ------
Router.get("/", IndexController.index);
Router.get("/todos/:title", IndexController.one);
Router.get("/todos/:title/delete", IndexController.delete);

module.exports = Router;
