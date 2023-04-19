const { request } = require('express')
const { createSaleService } = require('../services/sale.service')
const { updateCustomerSale } = require('../services/customer.service')




const createSaleController = async (req = request, res = response) => {
  const createDetailSale = await createSaleService(req)
  await updateCustomerSale(createDetailSale)
  res.json({
    createDetailSale,
  })
}

module.exports = {
  createSaleController,
}
