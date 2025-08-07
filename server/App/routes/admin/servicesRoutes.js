let express = require("express")
const { insertServices, viewServices, deleteServices, changeStatus, updateService, singleData } = require("../../controllers/admin/servicesController")

let servicesRoutes = express.Router()

servicesRoutes.post('/add', insertServices)
servicesRoutes.get('/view', viewServices)
servicesRoutes.post('/delete', deleteServices)
servicesRoutes.post('/change-status', changeStatus)
servicesRoutes.get('/single-data/:id', singleData)
servicesRoutes.put('/update/:id', updateService)

module.exports = {servicesRoutes}