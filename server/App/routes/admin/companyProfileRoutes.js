const express = require("express")
const multer = require("multer")
const { addCompanyProfile, viewCompanyProfile, deleteCompanyProfile, updateCompanyProfile } = require("../../controllers/admin/companyProfileController")


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/web-setting')
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

let companyProfileRoutes = express.Router()

companyProfileRoutes.post('/add', upload.single('companyLogo'), addCompanyProfile)
companyProfileRoutes.get('/view', viewCompanyProfile)
companyProfileRoutes.delete('/delete', deleteCompanyProfile)
companyProfileRoutes.put('/update/:id', upload.single('companyLogo'), updateCompanyProfile)

module.exports = {companyProfileRoutes}