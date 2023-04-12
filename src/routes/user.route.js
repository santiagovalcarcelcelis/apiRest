const { Router } = require('express')
const { createUserController } = require('../controllers/user.controller')
// const { check } = require("express-validator");

// const {validarCampos} = require("../middlewares/validar-campos")
// const {esRolvalido, emailExiste,existeUsuarioPorId} = require("../helpers/db-validators")

const router = Router()
// router.get("/", UsersGet)
// router.get('/:id', UsersGetId)
// router.delete('/:id', UsersDelete)
// router.put('/:id', UsersPut)
router.post('/', createUserController)

module.exports = router
