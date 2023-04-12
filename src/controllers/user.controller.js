const { response, request } = require('express')
const { v4 } = require('uuid')
const User = require('../models/user.model')
const bcryptjs = require('bcryptjs')

const UsersGet = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query
  const query = { deletedAt: undefined }

  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(Number(desde)).limit(Number(limite)),
  ])
  res.json({
    total,
    users,
  })
}
const UsersGetId = async (req, res) => {
  const id = req.params.id
  const user = await User.findOne({_id:id}).populate('products')
  res.json({
    user
  })

 
}
const UsersPost = async (req, res = response) => {
  const { name, email, password, role } = req.body
  let uuid = v4()
  const user = new User({ name, email, role, password, uuid })

  // encriptar la contraseña
  const salt = bcryptjs.genSaltSync()
  user.password = bcryptjs.hashSync(password, salt)
  // guardar en base de datos
  await user.save()
  res.json({
    user,
  })
}
const UsersPut = async (req, res = response) => {
  const id = req.params.id
  const { password, google, ...data } = req.body
  // todo validar contra la base de datos
  if (password) {
    const salt = bcryptjs.genSaltSync()
    data.password = bcryptjs.hashSync(password, salt)
  }
  const user = await User.findOneAndUpdate({ _id: id }, data)
  res.json({
    id,
    user,
  })
}
const UsersDelete = async (req, res = response) => {
  const { id } = req.params
  // fisicamente lo borramos
  // const usuario = await Usuario.findByIdAndDelete(id)
  const user = await User.findByIdAndUpdate(
    { _id: id },
    { deletedAt: new Date() }
  )

  res.json(user)
}
const usuariosPath = (req, res = response) => {
  res.json({
    msg: 'patch api - controlador',
  })
}

module.exports = {
  UsersGet,
  UsersPut,
  UsersPost,
  UsersGetId,
  UsersDelete,
  // usuariosPath
}
