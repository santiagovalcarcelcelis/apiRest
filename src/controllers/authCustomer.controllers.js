const { logIn } = require("../services/authCustomer.service")



const loginCustomer = async (req, res = response) => {
  const logCustomer = await logIn(req)
  const { customer, token } = logCustomer
  res.json({
    customer,
    token
  })
}

module.exports = {
  loginCustomer,
}