let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
const { adminRoutes } = require("./App/routes/admin/adminRoutes")
const { webRoutes } = require("./App/routes/web/webRoutes")

let app = express()

app.use(cors())
app.use(express.json())

require("dotenv").config()

app.use('/admin', adminRoutes)

app.use('/uploads/property-type', express.static("uploads/property-type"))
app.use('/uploads/sub-property-type', express.static("uploads/sub-property-type"))
app.use('/uploads/sub-services', express.static("uploads/sub-services"))
app.use('/uploads/testimonial', express.static("uploads/testimonial"))
app.use('/uploads/amenities', express.static("uploads/amenities"))
app.use('/uploads/properties', express.static("uploads/properties"))
app.use('/uploads/web-setting', express.static("uploads/web-setting"))

app.use('/web', webRoutes)

mongoose.connect('mongodb://localhost:27017/realestate')
.then((res)=>{
    app.listen(process.env.PORT)
})
