const { param, body } = require('express-validator');

const Task = require('../repository/taskRepository');

const validateIdParam = [
  param('id')
    .notEmpty()
    .isNumeric()
    .custom( (id) => Task.findIndex((task) => task.id === parseInt(id)) !== -1),
];

const validateTaskBody = [
  body('title').notEmpty().isString().withMessage('Title must be a string'),
  body('description').isString().withMessage("Description must be a string").optional({ nullable: true }),
  body('done').isBoolean().optional({ nullable: true }),
  body('start_date').isDate().optional({ nullable: true }),
  body('end_date').isDate().optional({ nullable: true }),
];

module.exports = {
  validateIdParam,
  validateTaskBody,
}