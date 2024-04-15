const { body, param } = require("express-validator");

const TodoMiddleware = {
  one: param("id", "Id est vide ou invalide.").isUUID(),
  patch: param("id", "Id est vide ou invalide.").isUUID(),
  delete: param("id", "Id est vide ou invalide.").isUUID(),
  post: [
    body("title", "Title est vide ou invalide.").notEmpty().isString(),
    body("description", "Description est vide ou invalide.")
      .notEmpty()
      .isString(),
  ],
};

module.exports = TodoMiddleware;
