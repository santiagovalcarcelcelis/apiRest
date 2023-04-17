const { Router } = require('express')
const { createProductController, getAllProductController, getIdProductController, updateProductController, deleteProductController } = require('../controllers/product.controllers')
const router = Router()
router.post('/',createProductController)
router.get('/', getAllProductController)
router.get('/:id', getIdProductController)
router.put('/:id', updateProductController)
router.delete('/:id',deleteProductController)

module.exports = router