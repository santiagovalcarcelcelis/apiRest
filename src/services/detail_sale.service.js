const Sale = require('../models/sale.model')
const Product = require('../models/product.model')
const DetailSale = require('../models/detail_sale.model')

const createDetailSaleService = async (req) => {
  const { id_product, id_sale } = req.body
  let sales = []
  let products = []
  const detailSale = new DetailSale({ id_product, id_sale })
  // guardar en base de datos
  const detailSaleSave = await detailSale.save()

  const saleUpdate = await Sale.findById({ _id: id_sale })
  const productUpdate = await Product.findById({ _id: id_product })
  saleUpdate.sales.push(detailSaleSave._id)
  productUpdate.products.push(detailSaleSave._id)
  const saveSale = await Sale.findOneAndUpdate({ _id: id_sale }, saleUpdate)
  const saveProduct = await Product.findOneAndUpdate({ _id: id_product },
    productUpdate
  )
  return detailSaleSave
}

module.exports = {
  createDetailSaleService,
}
