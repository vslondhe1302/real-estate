const express = require("express")
const multer = require("multer")
const path = require("path")
const fs = require("fs")
const { parentPropertyType, subPropertyTypes, localityList, amenitiesList, insertProperty, viewProperties, getSingleData, deleteProperty, updateProperty } = require("../../controllers/admin/propertiesController")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let {propertyname} = req.query || 'default'
    let baseDir = 'uploads/properties'
        
        const folderPath = path.join(baseDir,propertyname);
        
        // make sure folder is exist (create if not)
        fs.mkdirSync(folderPath,{recursive : true})
        
        // tell multer to save here
        cb(null,folderPath)
  },
  filename: function (req, file, cb) {
    let newFilename
    if(file.originalname.includes('%20')){
      newFilename = file.originalname.replace(/%20/g, "-")
    }
    else{
      newFilename=(file.originalname)
    }
    cb(null, `${Date.now()}-${newFilename}`)
  }
})

const upload = multer({ storage: storage })

let propertiesRoutes = express.Router()

propertiesRoutes.get('/parent-property-types', parentPropertyType)
propertiesRoutes.get('/sub-property-types/:parentId', subPropertyTypes)
propertiesRoutes.get('/localities', localityList)
propertiesRoutes.get('/amenities', amenitiesList)
propertiesRoutes.post('/add/',upload.fields(
    [
        {name : 'propertyImage', maxCount : 1},
        {name : 'propertyGalleryImages', maxCount : 10}
    ]
), insertProperty)
propertiesRoutes.get('/view', viewProperties)
propertiesRoutes.get('/single-data/:id', getSingleData)
propertiesRoutes.post('/delete/:id', deleteProperty)
propertiesRoutes.put('/update/:id',upload.fields(
    [
        {name : 'propertyImage', maxCount : 1},
        {name : 'propertyGalleryImages', maxCount : 10}
    ]
), updateProperty)

module.exports = {propertiesRoutes}