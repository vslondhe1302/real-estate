let express = require("express")
const multer = require("multer")
const { insertTestimonial, viewTestimonialData, deleteTestimonial, changeStatus, singleTestimonialData, updateTestimonial} = require("../../controllers/admin/testimonialController")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/testimonial')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

let testimonialRoutes = express.Router()

testimonialRoutes.post('/add', upload.single("image"), insertTestimonial)
testimonialRoutes.get('/view', viewTestimonialData)
testimonialRoutes.post('/delete', deleteTestimonial)
testimonialRoutes.post('/change-status', changeStatus)
testimonialRoutes.get('/single-data/:id', singleTestimonialData)
testimonialRoutes.put('/update/:id', upload.single("image"), updateTestimonial)

module.exports = {testimonialRoutes}