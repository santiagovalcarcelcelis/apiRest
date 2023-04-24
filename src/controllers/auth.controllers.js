const { login } = require("../services/auth.service")


const loginUser = async (req, res = response) => {
  const logIn = await login(req)
  const { user, token } = logIn
  res.json({
    user,
    token,
  })
}

module.exports = {
  loginUser,
}
