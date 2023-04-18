const { createDetailSaleService } = require('../services/detail_sale.service')


const createSaleController = async (req, res = response) => {
  const createDetailSale = await createDetailSaleService(req)
  res.json({
    createDetailSale,
  })
}

module.exports = {
  createSaleController,
}
