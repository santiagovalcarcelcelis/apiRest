const { request } = require('express')
const Sale = require('../models/sale.model')

const createSaleService = async (req) => {
  const { id_customer, total, total_vat } = req.body
  // console.log(products);
  const sale = new Sale({ id_customer, total, total_vat})
  // guardar en base de datos
  const saleSave = await sale.save()
  return saleSave
}
const updateSaleWithDetail = async (detailSaleSave,idsDetailSale) => {
  const { id_product, amount, full_sale, full_vat,_id} = detailSaleSave
  console.log(_id,"hola");
  let detailSale = []
  const saleUpdate = await Sale.findById({ _id })
  console.log(saleUpdate)
  saleUpdate.detailSale.push(...idsDetailSale)
  detailSaleSave = await Sale.findOneAndUpdate({ _id }, saleUpdate)
  return detailSaleSave
}

module.exports = {
  createSaleService,
  updateSaleWithDetail
}
