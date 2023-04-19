const { request } = require('express')
const Sale = require('../models/sale.model')

const createSaleService = async (req) => {
  const { id_customer, total, total_vat } = req.body
  const sale = new Sale({ id_customer, total, total_vat })
  // guardar en base de datos
  const saleSave = await sale.save()
  return saleSave
}
module.exports = {
  createSaleService,
}
