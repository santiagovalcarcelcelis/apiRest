const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model
const customerShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  id: {
    type: Number,
  },
  password: {
    type: String,
    required: [true, 'la contraseña es obligatorio'],
  },
  google: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: [true, 'el correo es obligatorio'],
    unique: true,
  },
  picture: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    emun: ['USER_ROLE'],
  },
  uuid: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  sales: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'sale',
    },
  ],deletedAt: { type: Date },
},
{ timestamps: {} })
customerShema.methods.toJSON = function () {
  const { __v, password, ...customer } = this.toObject()
  return customer
}
module.exports = mongoose.model('customer', customerShema)
