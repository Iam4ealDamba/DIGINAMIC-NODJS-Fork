const { body, param, query } = require("express-validator");

const TodoMiddleware = {
  one: param("title", "Title est vide ou invalide.").notEmpty().isString(),
  delete: param("title", "Title est vide ou invalide.").notEmpty().isString(),
  patch: [
    param("title", "Title est vide ou invalide.").notEmpty().isString(),
    body("done", "Done est vide ou invalide.").optional().isBoolean(),
    body("description", "Description est vide ou invalide.")
      .optional()
      .isString(),
  ],
  post: [
    body("title", "Title est vide ou invalide.").notEmpty().isString(),
    body("description", "Description est vide ou invalide.")
      .notEmpty()
      .isString(),
  ],
};

module.exports = TodoMiddleware;
