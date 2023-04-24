const { Router } = require('express')
const {check} = require("express-validator")
const { loginCustomer } = require('../controllers/authCustomer.controllers')



const router = Router()
router.post("/",loginCustomer)

module.exports = router