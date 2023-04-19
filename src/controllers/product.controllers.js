const { getIdProductService, createProductService, updateProductService, deleteProductService, getAllProductService } = require('../services/product.service')
const { updateUserProduct } = require('../services/user.service')

const getAllProductController = async (res = response) => {
  const geAllProduct = await getAllProductService(req)
  const {total,products} = geAllProduct
  res.json({
    total,
    products,
  })
}
const getIdProductController = async (req, res) => {
  const getIdProduct = await getIdProductService(req)
  const {id,product} = getIdProduct
  res.json({
    id,
    product,
  })
}
const createProductController = async (req, res = response) => {
  const createProduct = await createProductService(req)
  updateUserProduct(createProduct)
  res.json({
    createProduct
  })
}
const updateProductController = async (req, res = response) => {
  const updateProduct = await updateProductService(req)
  const {id,product} = updateProduct
  res.json({
    id,
    product,
  })
}
const deleteProductController = async (req, res = response) => {
  const deleteProduct = await deleteProductService(req)
  res.json(deleteProduct)
}

module.exports = {
  createProductController,
  getAllProductController,
  getIdProductController,
  updateProductController,
  deleteProductController
}
