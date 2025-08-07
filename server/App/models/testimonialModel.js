let mongoose = require("mongoose")

let testimonialSchema = new mongoose.Schema({
    title: {type: String, required: true},
    message: {type: String, required: true},
    designation: {type: String, required: true},
    image: {type: String, required: true},
    status: Boolean
})

let testimonialModel = mongoose.model("testimonial", testimonialSchema)

module.exports = {testimonialModel}