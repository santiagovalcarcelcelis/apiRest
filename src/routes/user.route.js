const { Router } = require('express')
// const { check } = require("express-validator");
const {
  UsersGet,
  UsersPost,
  UsersGetId,
  UsersPut,
  UsersDelete,
} = require('../controllers/user.controller')
// const {validarCampos} = require("../middlewares/validar-campos")
// const {esRolvalido, emailExiste,existeUsuarioPorId} = require("../helpers/db-validators")

const router = Router()
router.get("/", UsersGet)
router.get('/:id', UsersGetId)
router.delete('/:id', UsersDelete)
router.put('/:id', UsersPut)
router.post('/', UsersPost)

module.exports = router
