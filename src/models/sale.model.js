const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const SalesShema = new mongoose.Schema({
  id_customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  id_sale: {
    type: Number,
  },
  total :{
    type:Number
  },
  total_vat:{
    type:Number
  },
  detailSale: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DetailSale',
  }],
})

module.exports = mongoose.model('sale', SalesShema)
