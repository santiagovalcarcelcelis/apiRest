const { validationResult } = require('express-validator')

const validateFiels = (req,res,next) => {
  const errors = validationResult(req)
  console.log(errors,"fff");
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  console.log("llegue aca");
  next();
}

module.exports = {
  validateFiels,
}
