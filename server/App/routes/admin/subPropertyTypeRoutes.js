let express = require("express")
let multer = require("multer")
const { insertSubPropertyType, parentPropertyType, viewSubPropertyType, deleteSubPropertyType, changeStatus, getSingleData, updateSubPropertyType } = require("../../controllers/admin/subPropertyTypeController")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/sub-property-type')
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

let subPropertyTypeRoutes = express.Router()

subPropertyTypeRoutes.get('/parent-property-type', parentPropertyType)
subPropertyTypeRoutes.post('/add', upload.single("subPropertyTypeImage"), insertSubPropertyType)
subPropertyTypeRoutes.get('/view', viewSubPropertyType)
subPropertyTypeRoutes.post('/delete', deleteSubPropertyType)
subPropertyTypeRoutes.post('/change-status', changeStatus)
subPropertyTypeRoutes.get('/single-data/:id', getSingleData)
subPropertyTypeRoutes.put('/update/:id',upload.single("subPropertyTypeImage"), updateSubPropertyType)

module.exports = {subPropertyTypeRoutes}