const express = require("express")
const route = express.Router()
const teamController = require('../controller/team')

route.get('/team', teamController.index)
route.get('/formAddTeam', teamController.addTeam)
route.post('/addTeam', teamController.store)
route.delete('/team/:idTeam', teamController.delTeam)
route.get('/formUpdateTeam', teamController.updateTeam)
route.put('/updateTeam/:idTeam', teamController.updateTeam)

module.exports = route