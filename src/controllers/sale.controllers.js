const { request } = require('express')
const { createSaleService } = require('../services/sale.service')


const createSaleController = async (req = request, res = response) => {
  const createDetailSale = await createSaleService(req)
  res.json({
    createDetailSale,
  })
}
const updateCustomer = async () => {
  let sales = []
  const {id_customer} = await createSaleController(req = request, res = response)
  const customerUpdate = await Customer.findById({ _id: id_customer })
  customerUpdate.sales.push(saleSave._id)
  const saveSale = await Customer.findOneAndUpdate(
    { _id: id_customer },
    customerUpdate
  )
}
module.exports = {
  createSaleController,
}
