const { Schema, model } = require('mongoose')

const RolesShema = Schema({
  rol: {
    type: String,
    required: [true, 'El rol es obligatorio'],
  },
})

module.exports = model('Role', RolesShema)
