const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const ProductsShema = new mongoose.Schema({
  id: {
    type: Number,
  },
  uuid: {
    type: String,
  },
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  description: {
    type: String,
    required: [true, 'La descripcion es obligatoria'],
  },
  picture: {
    type: String,
  },
  date_create: {
    type: String,
  },
  deletedAt: { type: Date },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
},
{ timestamps: {}}
)

module.exports= mongoose.model('Product', ProductsShema)


