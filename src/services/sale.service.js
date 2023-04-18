const {request } = require('express')
const Sale = require('../models/sale.model')
const Customer = require('../models/customer.model')

const createSaleService = async (req) => {
  const { id_customer} = req.body
  let sales = []
  const sale = new Sale({ id_customer})
  // guardar en base de datos
  const saleSave = await sale.save()

  const customerUpdate = await Customer.findById({ _id: id_customer })
  customerUpdate.sales.push(saleSave._id)
  const saveSale = await Customer.findOneAndUpdate(
    { _id: id_customer },
    customerUpdate
  )
  return saleSave
}

module.exports = {
  createSaleService,
}
