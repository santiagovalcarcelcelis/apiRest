const { Router } = require('express')
const {check} = require("express-validator")
const { loginUser } = require('../controllers/auth.controllers')


const router = Router()
router.post("/",loginUser)

module.exports = router