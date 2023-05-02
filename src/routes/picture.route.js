const { Router } = require('express')
const { pictureService } = require('../services/picture')

const router = Router()
router.post('/',pictureService)
// router.get('/', getAllProductController)
// router.get('/:id', getIdProductController)
// router.put('/:id', updateProductController)
// router.delete('/:id',deleteProductController)

module.exports = router