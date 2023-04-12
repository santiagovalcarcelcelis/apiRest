const { response, request } = require('express')
const { v4 } = require('uuid')
const Customer = require('../models/customer.model')
const bcryptjs = require('bcryptjs')

const CustomersGet = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query
  const query = { deletedAt: undefined }

  const [total, customer] = await Promise.all([
    Customer.countDocuments(query),
    Customer.find(query).skip(Number(desde)).limit(Number(limite)),
  ])
  res.json({
    total,
    customer,
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
