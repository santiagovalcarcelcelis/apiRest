const { Router } = require('express')
const {
  getAllUserController,
  getIdUserController,
  deleteUserController,
  updateUserController,
  createUserController,
} = require('../controllers/user.controller')
const { check } = require('express-validator')
const { validateFiels } = require('../middlewares/validate-fields')
const { validateJwt } = require('../middlewares/validate-jwt')

const router = Router()
router.get('/', getAllUserController)
router.get('/:id', getIdUserController)
router.delete('/:id',[
  validateJwt
],deleteUserController)
router.put('/:id', updateUserController)
router.post(
  '/',
  [
    check('name', 'el name es obligatorio').isLength(),
    check('password', 'el password es obligatorio y debe ser mas de 6 letras').isLength({min:6}),
    check('email', 'el email no es valido').isEmail(),
    check('role', 'no es un role valido').isIn(["ADMIN_ROLE","USER_ROLE"]),
    validateFiels
  ],
  createUserController
)

module.exports = router
