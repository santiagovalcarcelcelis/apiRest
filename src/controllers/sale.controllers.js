const { request } = require('express')
const { createSaleService, createSaleDetailSale, updateDetailSale, updateSaleWithDetail } = require('../services/sale.service')
const { createDetailSaleService } = require('../services/detail_sale.service')
const { updateCustomerSale } = require('../services/customer.service')




const createSaleController = async (req = request, res = response) => {
  const createDetailSale = await createSaleService(req)
  const idsDetailSale = await createDetailSaleService(req,createDetailSale)
  await updateCustomerSale(createDetailSale)
  const sale = await updateSaleWithDetail(createDetailSale,idsDetailSale)
  res.json({
    sale
  })
}

module.exports = {
  createSaleController,
}
