let mongoose = require("mongoose")
const { default: slugify } = require("slugify")

let subPropertyTypeSchema = new mongoose.Schema({
    parentPropertyType : {type : mongoose.Types.ObjectId, ref:"propertyType"},
    subPropertyTypeName : {type : String, required : true, unique: true},
    subPropertyTypeImage : {type : String, required : true},
    subPropertyTypeStatus : Boolean,
    slug : String
})

subPropertyTypeSchema.pre('save',function(next){
    this.slug = slugify(this.subPropertyTypeName,{lower : true})
    next()
})


let subPropertyTypeModel = mongoose.model("subpropertytype", subPropertyTypeSchema)

module.exports = {subPropertyTypeModel}