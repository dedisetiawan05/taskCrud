const express = require("express")
const route = express.Router()
const heroController = require('../controller/hero')
route.get('/hero', heroController.index)
route.get('/formAddHero', heroController.addHero)
route.post('/addHero', heroController.store)
route.get('/formUpdateHero/:idHero', heroController.updateHero)
route.post('/updateHero/:idHero', heroController.update)
route.get('/delHero/:idHero', heroController.delHero)

module.exports = route