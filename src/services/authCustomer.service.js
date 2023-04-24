const bcryptjs = require('bcryptjs')
const Customer = require('../models/customer.model')
const { triggerJWT } = require('../helpers/triggerJWT.helper')

const logIn = async (req) => {
  const { email, password } = req.body
  try {
    //verificar si el email existe
    const customer = await Customer.findOne({ email })
    if (!customer) {
      return res.status(400).json({
        msg: 'Customer/Password no son correctos-email',
      })
    }
    //verificar la contraseña
    const vaidPassword = bcryptjs.compareSync(password, customer.password)
    if (!vaidPassword) {
      return res.status(400).json({
        msg: 'Customer/Password no son correctos-password',
      })
    }
    //generar el jwt
    const token = await triggerJWT(customer._id)
    return {customer,token}
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'hable con el administrador',
    })
  }
 
}

module.exports = {
  logIn
}
