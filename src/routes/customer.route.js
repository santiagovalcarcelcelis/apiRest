const { Router } = require('express')
const {
  createCustomerController,
  getAllCustomerController,
  getIdCustomerController,
  updateCustomerController,
  deleteCustomerController,
} = require('../controllers/customer.controllers')
const { check } = require('express-validator')
const { validateFiels } = require('../middlewares/validate-fields')
// const { check } = require("express-validator");

// const {validarCampos} = require("../middlewares/validar-campos")
// const {esRolvalido, emailExiste,existeUsuarioPorId} = require("../helpers/db-validators")

const router = Router()
router.get('/', getAllCustomerController)
router.get('/:id', getIdCustomerController)
router.delete('/:id', deleteCustomerController)
router.put('/:id', updateCustomerController)
router.post(
  '/',
  [
    check('name', 'el name es obligatorio').not().isEmail(),
    check(
      'password',
      'el password es obligatorio y debe ser mas de 6 letras'
    ).isLength({ min: 6 }),
    check('email', 'el email no es valido').isEmail(),
    check('role', 'no es un role valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validateFiels,
  ],
  createCustomerController
)

module.exports = router
