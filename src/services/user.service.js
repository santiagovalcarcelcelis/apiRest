const { response, request } = require('express')
const { v4 } = require('uuid')
const User = require('../models/user.model')
const bcryptjs = require('bcryptjs')

const createUserService = async (req) => {
  const { name, email, password, role } = req.body
  let uuid = v4()
  const user = new User({ name, email, role, password, uuid })

  // encriptar la contraseña
  const salt = bcryptjs.genSaltSync()
  user.password = bcryptjs.hashSync(password, salt)
  // guardar en base de datos
  const userSave= await user.save()
  return userSave
  
}
module.exports = {
  createUserService
}
