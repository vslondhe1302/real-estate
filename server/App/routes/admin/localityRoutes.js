let express = require("express")
const { addLocality, viewLocality, deleteLocality, changeStatus, updateLocality, singleData } = require("../../controllers/admin/localityController")

let localityRoutes = express.Router()

localityRoutes.post('/add', addLocality)
localityRoutes.get('/view', viewLocality)
localityRoutes.post('/delete', deleteLocality)
localityRoutes.post('/change-status', changeStatus)
localityRoutes.get('/single-list/:id', singleData)
localityRoutes.put('/update/:id', updateLocality)

module.exports = {localityRoutes}