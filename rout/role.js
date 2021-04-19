const express = require("express")
const route = express.Router()
const roleController = require('../controller/role')

route.get('/role', roleController.index)
route.get('/formAddRole', roleController.addRole)
route.post('/addRole', roleController.store)
route.get('/formUpdateRole', roleController.updateRole)
route.put('/updateRole/:idRole', roleController.update)
route.delete('/Role/:idRole', roleController.delRole)

module.exports = route