const { destroy, getAll, update, store } = require("../controller/productController")
const {validateIdParam, validateBodyParam, validate } = require("../validator/productValidator")

const express = require("express")
const router = express.Router()

router.get("/product", getAll)
router.post("/product",validateBodyParam,validate,  store)
router.put("/product/:id",validateIdParam ,validateBodyParam , validate , update)
router.delete("/product/:id",validateIdParam, validate , destroy)

module.exports = router