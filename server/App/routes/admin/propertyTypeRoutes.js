let express = require("express")
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/property-type')
  },
  filename: function (req, file, cb) {
    let newFilename
    if(file.originalname.includes('%20')){
      newFilename = file.originalname.replace(/%20/g, "-")
    }
    cb(null, `${Date.now()}-${newFilename}`)
  }
})

const upload = multer({ storage: storage })

const { addPropertyType, viewPropertyTypes, deletePropertyType, changeStatus, updatePropertyType, singlePropertyType } = require("../../controllers/admin/propertyTypeController")

let propertyTypeRoutes = express.Router()

propertyTypeRoutes.post("/add",upload.single('propertyTypeImage'), addPropertyType)
propertyTypeRoutes.get("/view", viewPropertyTypes)
propertyTypeRoutes.post("/delete", deletePropertyType)
propertyTypeRoutes.post("/change-status", changeStatus)
propertyTypeRoutes.get("/single-property-type/:id", singlePropertyType)
propertyTypeRoutes.put("/update/:id",upload.single('propertyTypeImage'), updatePropertyType)

module.exports = {propertyTypeRoutes}