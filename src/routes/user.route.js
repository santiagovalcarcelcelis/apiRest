const { Router } = require('express')
const { getAllUserController, getIdUserController, deleteUserController, updateUserController, createUserController } = require('../controllers/user.controller')
const { check } = require("express-validator");

// const {validarCampos} = require("../middlewares/validar-campos")
// const {esRolvalido, emailExiste,existeUsuarioPorId} = require("../helpers/db-validators")

const router = Router()
router.get("/", getAllUserController)
router.get('/:id', getIdUserController)
router.delete('/:id', deleteUserController)
router.put('/:id', updateUserController)
router.post('/', createUserController)

module.exports = router
