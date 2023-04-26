const { response } = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const validateJwt = async (req, res = response, next) => {
  const token = req.header('x-token')
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la peticion',
    })
  }
  try {
    const {_id} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
    const user = await User.findById(_id)
    console.log(user,"www");
    if (!user) {
      return res.status(401).json({
        msg: 'Token no valido - usuario no existe en DB',
      })
    }
    if (user.deletedAt) {
      return  res.status(401).json({
        msg: 'Token no valido - usuario barrado',
      })
    }

    req.user = user
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
  validateJwt,
}
