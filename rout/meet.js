const express = require("express")
const route = express.Router()
const meetController = require('../controller/meet')

route.get('/meet', meetController.index)
route.get('/formAddMeet', meetController.addMeet)
route.post('/addMeet', meetController.store)
route.get('/formAddMeet', meetController.updateMeet)
route.put('/updateMeet/:idMeet', meetController.update)
route.delete('/meet/:idmeet', meetController.delMeet)

module.exports = route