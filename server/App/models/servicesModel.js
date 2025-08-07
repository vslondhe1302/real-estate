let mongoose = require("mongoose")
const { default: slugify } = require("slugify")

let servicesSchema = new mongoose.Schema({
    servicesTitle : {type: String, required: true},
    servicesDescription : {type: String, required: true},
    servicesStatus : Boolean,
    slug: String
})

servicesSchema.pre('save',function(next){
    this.slug = slugify(this.servicesTitle,{lower : true})
    next()
})


let servicesModel = mongoose.model("service", servicesSchema)

module.exports = {servicesModel}