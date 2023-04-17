const { Router } = require('express')
const { createCustomerController, getAllCustomerController, getIdCustomerController, updateCustomerController, deleteCustomerController } = require('../controllers/customer.controllers')
// const { check } = require("express-validator");

// const {validarCampos} = require("../middlewares/validar-campos")
// const {esRolvalido, emailExiste,existeUsuarioPorId} = require("../helpers/db-validators")

const router = Router()
router.get("/", getAllCustomerController)
router.get('/:id', getIdCustomerController)
router.delete('/:id', deleteCustomerController)
router.put('/:id', updateCustomerController)
router.post('/', createCustomerController)

module.exports = router