const {
  createCustomerService,
  getAllCustomerService,
  getIdCustomerService,
  updateCustomerService,
  deleteCustomerService,
} = require('../services/customer.service')

const getAllCustomerController = async (req, res = response) => {
  const getAllCustomer = await getAllCustomerService(req)
  const { customer, total } = getAllCustomer
  res.json({
    total,
    customer,
  })
}
const getIdCustomerController = async (req, res = response) => {
  const getIdCustomer = await getIdCustomerService(req)
  res.json({
    getIdCustomer,
  })
}
const createCustomerController = async (req, res = response) => {
  const createCustomer = await createCustomerService(req)
  res.json({
    createCustomer,
  })
}
const updateCustomerController = async (req, res = response) => {
  const updateCustomer = await updateCustomerService(req)
  const { id, customer } = updateCustomer
  res.json({
    id,
    customer,
  })
}
const deleteCustomerController = async (req, res = response) => {
  const deleteCustomer = await deleteCustomerService(req)
  const customer = deleteCustomer
  res.json(customer)
}
module.exports = {
  createCustomerController,
  getAllCustomerController,
  getIdCustomerController,
  updateCustomerController,
  deleteCustomerController,
}
