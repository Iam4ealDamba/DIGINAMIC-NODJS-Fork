const Router = require("express").Router();
const TodoController = require("../controllers/todo.controller");

Router.route("/").get(TodoController.all).post(TodoController.create);

Router.route("/:id")
  .get(TodoController.one)
  .patch(TodoController.update)
  .delete(TodoController.delete);

module.exports = Router;
