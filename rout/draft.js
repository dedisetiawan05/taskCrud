const express = require("express")
const route = express.Router()
const draftController = require('../controller/draft')

route.get('/draft', draftController.index)

module.exports = route