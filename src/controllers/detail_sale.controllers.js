const { createDetailSaleService } = require('../services/detail_sale.service')

const createDetailSaleController = async (req, res = response) => {
  const createSale = await createDetailSaleService(req)
  res.json({
    createSale,
  })
}
module.exports = {
  createDetailSaleController,
}
