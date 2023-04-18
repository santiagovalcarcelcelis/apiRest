
const { Router } = require('express')
const { createDetailSaleController } = require('../controllers/detail_sale.controllers')

const router = Router()
router.post('/',createDetailSaleController)
// router.get('/', getAllProductController)
// router.get('/:id', getIdProductController)
// router.put('/:id', updateProductController)
// router.delete('/:id',deleteProductController)

module.exports = router