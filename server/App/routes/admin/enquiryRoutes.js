let express = require("express")
const { viewEnquiries, deleteEnquiries, changeStatus } = require("../../controllers/admin/enquiriesController")

let enquiryRoutes = express.Router()

enquiryRoutes.get('/property-enquiries', viewEnquiries)
enquiryRoutes.post('/delete-enquiries', deleteEnquiries)
enquiryRoutes.post('/change-status', changeStatus)

module.exports={enquiryRoutes}