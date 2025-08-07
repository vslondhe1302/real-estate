let express = require("express")
const multer = require("multer")
const { viewLocalitiesList, megaMenu, servicesList, subServicesList, propertyTypes, viewTestimonial, viewContactDetails, viewProperties, viewSinglePropertyDetails, viewImpactfulProperties, viewPropertiesByType, insertEnquiryData } = require("../../controllers/web/homePageController")

let upload = multer()
let homePageRoutes = express.Router()

homePageRoutes.get('/mega-menu', megaMenu)
homePageRoutes.get('/property-types', propertyTypes)
homePageRoutes.get('/locality-list', viewLocalitiesList)
homePageRoutes.get('/services', servicesList)
homePageRoutes.get('/sub-services', subServicesList)
homePageRoutes.get('/testimonial', viewTestimonial)
homePageRoutes.get('/contact-details', viewContactDetails)
homePageRoutes.get('/properties', viewProperties)
homePageRoutes.get('/listed-properties/:ptype', viewPropertiesByType)
homePageRoutes.get('/single-property-detail/:slug', viewSinglePropertyDetails)
homePageRoutes.get('/impactful-properties', viewImpactfulProperties)
homePageRoutes.post('/enquiry-data',upload.none(), insertEnquiryData)

module.exports = {homePageRoutes}