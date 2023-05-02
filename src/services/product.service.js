const { request,res } = require('express')
const { v4 } = require('uuid')
const Product = require('../models/product.model')


const getAllProductService = async (req = request) => {
  const { limite = 5, desde = 0 } = req.query
  const query = { deletedAt: undefined }

  const [total, products] = await Promise.all([
    Product.countDocuments(query),
    Product.find(query).skip(Number(desde)).limit(Number(limite)),
  ])
  return { total, products }
}
const getIdProductService = async (req) => {
  const id = req.params.id
  const product = await Product.findById(id).populate('user')
  return { id, product }
}
const createProductService = async (req) => {
  const { name, description, picture} = req.body
  let uuid = v4()
  const product = new Product({ name, description, picture, uuid})
  // guardar en base de datos
  const productSave = await product.save()
  return productSave
}
const updateProductService = async (req) => {
  const id = req.params.id
  const { password, google, ...data } = req.body
  const product = await Product.findOneAndUpdate({ _id: id }, data)
  return { id, product }
}
const deleteProductService = async (req) => {
  const { id } = req.params
  // fisicamente lo borramos
  // const usuario = await Usuario.findByIdAndDelete(id)
  const product = await Product.findByIdAndUpdate(
    { _id: id },
    { deletedAt: new Date() }
  )
  return product
}

module.exports = {
  createProductService,
  getAllProductService,
  getIdProductService,
  updateProductService,
  deleteProductService,
}
