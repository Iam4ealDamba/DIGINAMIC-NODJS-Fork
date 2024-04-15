const Router = require("express").Router();
const TodoController = require("../controllers/todo.controller");
const TodoMiddleware = require("../middlewares/todo.middleware");

// ------ Routes ------
Router.route("/")
  .get(TodoController.all)
  .post(TodoMiddleware.post, TodoController.create);

Router.route("/:title")
  .get(TodoController.all)
  .patch(TodoMiddleware.patch, TodoController.update)
  .delete(TodoMiddleware.delete, TodoController.delete);

module.exports = Router;
