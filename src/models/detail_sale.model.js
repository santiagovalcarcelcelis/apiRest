const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const detailsSaleShema = Schema({
  id_product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  amount: {
    type: Number,
  },
  id_sale: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'sale',
  },
  full_sale: {
    type: String,
  },
  full_vat: {
    type: String,
  },
})

module.exports = mongoose.model('DetailSale',detailsSaleShema)

