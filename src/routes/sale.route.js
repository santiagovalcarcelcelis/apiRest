const { Router } = require('express')
const { createSaleController } = require('../controllers/sale.controllers')
const router = Router()
const { validateCustomerJwt } = require('../middlewares/validateCustomer-jwt')
router.post('/', [validateCustomerJwt], createSaleController)
// router.get('/', getAllProductController)
// router.get('/:id', getIdProductController)
// router.put('/:id', updateProductController)
// router.delete('/:id',deleteProductController)

module.exports = router
