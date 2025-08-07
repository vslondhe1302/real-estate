let mongoose = require("mongoose")

let localitySchema = new mongoose.Schema({
    localityName : {type:String, required : true},
    localityCity : {type:String, required : true},
    localityStatus : Boolean,
    slug: String
})

localitySchema.pre('save', function (next) {
    this.slug = slugify(this.localityName, { lower: true })
    next()
})

let localityModel = mongoose.model("locality",localitySchema)

module.exports = {localityModel}