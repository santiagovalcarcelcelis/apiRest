const DetailSale = require('../models/detail_sale.model')

const createDetailSaleService = async (req, sale) => {
  const { products } = req.body
  const {_id} = sale
  const id_sale = _id
  const idsDetailSale = []
  for (let i = 0; i < products.length; i++) {
    // console.log(products[i]);
    const { price, amount } = products[i]
    if (!price , amount) {
      const full_sale = price * amount
      const full_vat = full_sale+(full_sale * (19 / 100))
      const id_product = products[i]['id_product']
      const detailSale = new DetailSale({
        id_product,
        amount,
        full_sale,
        full_vat,
        id_sale
      })
      const detailSaleSave = await detailSale.save()
      idsDetailSale.push(detailSaleSave._id)
    } 
  }
  return idsDetailSale
}
module.exports = {
  createDetailSaleService,
}
