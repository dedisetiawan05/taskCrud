const express = require("express")
const route = express.Router()
const loginController = require('../controller/login')

route.get('/', loginController.index)
route.get('/login', loginController.login)
route.post('/login', loginController.validasi)
route.get('/register', loginController.register)
route.post('/prosesRegister', loginController.prosesRegister)

module.exports = route