const { createDetailSaleService } = require('../services/detail_sale.service')
const { updateSaleDetailSale } = require('../services/sale.service')

const createDetailSaleController = async (req, res = response) => {
  const createSale = await createDetailSaleService(req)
  updateSaleDetailSale()
  res.json({
    createSale,
  })
}
module.exports = {
  createDetailSaleController,
}
