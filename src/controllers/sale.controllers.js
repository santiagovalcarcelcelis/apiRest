const { createSaleService } = require("../services/sale.service")


const createSaleController = async (req, res = response) => {
    const createSale = await createSaleService(req)
    res.json({
      createSale
    })
  }

module.exports = {
    createSaleController
}