const { body, param, validationResult } = require('express-validator');
const products = require('../repository/productRepository');

const validateIdParam = [
  param('id').notEmpty().isNumeric().custom((id) => (products.findIndex((product) => product.id === parseInt(id)) !== -1) ),
];

const validateBodyParam = [
  body('quantity'),
  body('price'),
  body('name'),
]

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()){
    return res.send({errors : errors.array()})
  }

  next()
}


module.exports = { validateIdParam, validate, validateBodyParam };
