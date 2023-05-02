const jwt = require('jsonwebtoken')

const triggerJWT = (_id = '') => {
  return new Promise((resolve, reject) => {
    const payload = { _id }
    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEYCUSTOMER,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: '4h',
      },
      (err, token) => {
        if (err) {
          console.log(err)
          reject('no se pudo generar el token')
        } else {
          resolve(token)
        }
      }
    )
  })
}

module.exports = {
  triggerJWT,
}
