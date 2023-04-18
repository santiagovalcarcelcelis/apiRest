const { request } = require('express')
const { v4 } = require('uuid')
const Customer = require('../models/customer.model')
const bcryptjs = require('bcryptjs')

const getAllCustomerService = async (req = request) => {
  const { limite = 5, desde = 0 } = req.query
  const query = { deletedAt: undefined }
  const [total, customer] = await Promise.all([
    Customer.countDocuments(query),
    Customer.find(query).skip(Number(desde)).limit(Number(limite)),
  ])
  return { total, customer }
}
const getIdCustomerService = async (req) => {
  const id = req.params.id
  const customer = await Customer.findOne({ _id: id }).populate('sales')
  return customer
}
const updateCustomerService = async (req) => {
  const id = req.params.id
  const { password, google, ...data } = req.body
  // todo validar contra la base de datos
  if (password) {
    const salt = bcryptjs.genSaltSync()
    data.password = bcryptjs.hashSync(password, salt)
  }
  const customer = await Customer.findOneAndUpdate({ _id: id }, data)
  return { id, customer }
}
const createCustomerService = async (req) => {
  const { name, email, password, role } = req.body
  let uuid = v4()
  const customer = new Customer({ name, email, role, password, uuid })
  // encriptar la contraseña
  const salt = bcryptjs.genSaltSync()
  customer.password = bcryptjs.hashSync(password, salt)
  // guardar en base de datos
  const customerSave = await customer.save()
  return customerSave
}
const deleteCustomerService = async (req) => {
  const { id } = req.params
  // fisicamente lo borramos
  // const usuario = await Usuario.findByIdAndDelete(id)
  const customer = await Customer.findByIdAndUpdate(
    { _id: id },
    { deletedAt: new Date() }
  )
  return customer
}
module.exports = {
  createCustomerService,
  getAllCustomerService,
  updateCustomerService,
  deleteCustomerService,
  getIdCustomerService,
}
