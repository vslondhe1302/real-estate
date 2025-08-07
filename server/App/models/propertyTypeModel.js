const mongoose = require("mongoose")
const { default: slugify } = require("slugify")

let propertyTypeSchema = new mongoose.Schema({
    propertyTypeName : {type:String, required : true},
    propertyTypeOrder : {type:Number, required : true},
    propertyTypeImage : {type:String, required : true},
    propertyTypeStatus : Boolean,
    slug : String
})

propertyTypeSchema.pre('save',function(next){
    this.slug = slugify(this.propertyTypeName,{lower : true})
    next()
})

propertyTypeSchema.virtual('subpropertytypes', {
    ref : 'subpropertytype',
    localField : '_id',
    foreignField : 'parentPropertyType'
})
propertyTypeSchema.set('toJSON', {virtuals : true})

let propertyTypeModel = mongoose.model("propertyType", propertyTypeSchema)
module.exports = {propertyTypeModel}