const express = require("express")
const route = express.Router()
const playerController = require('../controller/player')

route.get('/player', playerController.index)
route.get('/formAddplayer', playerController.addplayer)
route.post('/addplayer', playerController.store)
route.delete('/player/:idplayer', playerController.delplayer)
route.get('/formUpdateplayer', playerController.updateplayer)
route.put('/updateplayer/:idplayer', playerController.updateplayer)

module.exports = route