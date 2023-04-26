const { response } = require('express')
const jwt = require('jsonwebtoken')

const validateJwt = (req, res = response, next) => {
  const token = req.header('x-token')
  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la peticion',
    })
  }
  try {
    jwt.verify(token, prrocess.env.SECRETORPRIVATEKEY)
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
