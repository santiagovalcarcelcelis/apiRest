const { Router } = require('express')
const { check } = require('express-validator')
const { uploadImage, updateImage, showImage } = require('../controllers/picture.controller')
const { validateFiels } = require('../middlewares/validate-fields')
const { allowedcollections } = require('../helpers/validated-collections.helpers')

const router = Router()
router.post('/',uploadImage)
router.get('/:collection/:id',[
  check("id","El id debe de ser de mongo").isMongoId(),
  check("collection").custom(c=>allowedcollections(c,["users","products","customer"])),
  validateFiels
],showImage)
// router.get('/:id', getIdProductController)
router.put('/:collection/:id',[
  check("id","El id debe de ser de mongo").isMongoId(),
  check("collection").custom(c=>allowedcollections(c,["users","products","customer"])),
  validateFiels
],updateImage)
// router.delete('/:id',deleteProductController)

module.exports = router