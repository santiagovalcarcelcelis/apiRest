const { response } = require('express')
const jwt = require('jsonwebtoken')
const Customer = require('../models/customer.model')

const validateCustomerJwt = async (req, res = response, next) => {
  const token = req.header('y-token')
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la peticion',
    })
  }
  try {
    const { _id } = jwt.verify(token, process.env.SECRETORPRIVATEKEYCUSTOMER)
    const customer = await Customer.findById(_id)
    console.log(customer)
    if (!customer) {
      return res.status(401).json({
        msg: 'Token no valido - usuario no existe en DB',
      })
    }
    if (customer.deletedAt) {
      return res.status(401).json({
        msg: 'Token no valido - usuario barrado',
      })
    }

    req.customer = customer
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({
      msg: 'token no valido',
    })
  }

  console.log(token)
}

module.exports = {
  validateCustomerJwt,
}
