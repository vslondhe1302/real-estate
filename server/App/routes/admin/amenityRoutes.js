let express = require("express")
const multer = require("multer")
const { insertAmenities, viewAmenities, deleteAmenities, changeStatus, singleData, updateAmenities } = require("../../controllers/admin/amenitiesController")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/amenities')
  },
  filename: function (req, file, cb) {
    let newFilename
    if(file.originalname.includes('%20')){
      newFilename = file.originalname.replace(/%20/g, "-")
    }else{
      newFilename= file.originalname
    }
    cb(null, `${Date.now()}-${newFilename}`)
  }
})

const upload = multer({ storage: storage })

let amenitiesRoutes = express.Router()

amenitiesRoutes.post("/add", upload.single('image'), insertAmenities)
amenitiesRoutes.get("/view", viewAmenities)
amenitiesRoutes.post("/delete", deleteAmenities)
amenitiesRoutes.post("/change-status", changeStatus)
amenitiesRoutes.get("/single-data/:id", singleData)
amenitiesRoutes.put("/update/:id",  upload.single('image'), updateAmenities)

module.exports = {amenitiesRoutes}