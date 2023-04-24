const bcryptjs = require('bcryptjs')
const User = require('../models/user.model')
const { triggerJWT } = require('../helpers/triggerJWT.helper')

const login = async (req) => {
  const { email, password } = req.body
  try {
    //verificar si el email existe
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        msg: 'User/Password no son correctos-email',
      })
    }
    //verificar la contraseña
    const vaidPassword = bcryptjs.compareSync(password, user.password)
    if (!vaidPassword) {
      return res.status(400).json({
        msg: 'User/Password no son correctos-password',
      })
    }
    //generar el jwt
    const token = await triggerJWT(user._id)
    return {user,token}
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'hable con el administrador',
    })
  }
 
}

module.exports = {
  login
}
