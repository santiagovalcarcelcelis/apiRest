const { request,response} = require('express')
const { v4 } = require('uuid')
const User = require('../models/user.model')
const bcryptjs = require('bcryptjs')


const getAllUserService = async (req = request) => {
  const { limite = 5, desde = 0 } = req.query
  const query = { deletedAt: undefined }
  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(Number(desde)).limit(Number(limite)),
  ])
  return { total, users }
}
const getIdUserService = async (req, res) => {
  const id = req.params.id
  const user = await User.findOne({ _id: id }).populate('products')
  return user
}
const createUserService = async (req,res= response) => {
  const { name, email, password, role } = req.body
  //verificar si el correo existe
  const existsEmail =  await User.findOne({email:email})
 
  if (existsEmail) {
    return res.status(400).json({
      msg:"Este email ya esta registrado"
    });
  }
  let uuid = v4()
  const user = new User({ name, email, role, password, uuid })
  // encriptar la contraseña
  const salt = bcryptjs.genSaltSync()
  user.password = bcryptjs.hashSync(password, salt)
  // guardar en base de datos
  const userSave = await user.save()
  return userSave
}
const updateUserService = async (req) => {
  const id = req.params.id
  const { password, google, ...data } = req.body
  // todo validar contra la base de datos
  if (password) {
    const salt = bcryptjs.genSaltSync()
    data.password = bcryptjs.hashSync(password, salt)
  }
  const user = await User.findOneAndUpdate({ _id: id }, data)
  return { id, user }
}
const deleteUserService = async (req) => {
  const { id } = req.params
  const user = await User.findByIdAndUpdate(
    { _id: id },
    { deletedAt: new Date() }
  )
  const userAuthenticated = req.user
  return {user,userAuthenticated}
}
const updateUserProduct = async (product) =>{
  const {user} = product
  console.log(user,"holaaaa");
  let products = []
  const userUpdate = await User.findById({ _id: user })
  userUpdate.products.push(product._id)
  product = await User.findOneAndUpdate({ _id: user }, userUpdate)
}


module.exports = {
  createUserService,
  getAllUserService,
  getIdUserService,
  updateUserService,
  deleteUserService,
  updateUserProduct
}
