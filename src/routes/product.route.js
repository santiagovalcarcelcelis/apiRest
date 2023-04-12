const { Router } = require('express')
const {
  ProductsPost,
  ProductsGet,
  ProductsGetId,
  ProductsPut,
  ProductsDelete
} = require('../controllers/product.controllers')
const router = Router()
router.post('/',ProductsPost)
router.get('/', ProductsGet)
router.get('/:id', ProductsGetId)
router.put('/:id', ProductsPut)
router.delete('/:id',ProductsDelete)

module.exports = router