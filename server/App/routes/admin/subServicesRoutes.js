let express = require("express")
const multer = require("multer")
const { insertSubServices, getParentServices, viewSubServices, deleteSubServices, changeStatus, getSingleData, updateSubServices } = require("../../controllers/admin/SubServicesController")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/sub-services')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

let subServicesRoutes = express.Router()

subServicesRoutes.get('/parent-services', getParentServices)
subServicesRoutes.post('/add', upload.single('subServicesImage'), insertSubServices)
subServicesRoutes.get('/view', viewSubServices)
subServicesRoutes.post('/delete', deleteSubServices)
subServicesRoutes.post('/change-status', changeStatus)
subServicesRoutes.get('/single-data/:id', getSingleData)
subServicesRoutes.put('/update/:id', upload.single('subServicesImage'), updateSubServices)

module.exports = {subServicesRoutes}