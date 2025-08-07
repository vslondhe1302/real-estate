let mongoose = require("mongoose")
const { default: slugify } = require("slugify")

let propertiesSchema = new mongoose.Schema({

    propertyName: { type: String, required: true },
    parentPropertyType: { type: mongoose.Types.ObjectId, ref: "propertyType", required: true },
    subPropertyType: { type: mongoose.Types.ObjectId, ref: "subpropertytype", required: true },
    propertyLocality: { type: mongoose.Types.ObjectId, ref: "locality", required: true },
    propertyImage: String,
    propertyGalleryImages: Array,
    propertyLocation: String,
    propertyId: String,
    propertyArea: String,
    propertyFor: String,
    propertyDirection: String,
    ownershipTitle: String,
    roadWidth: String,
    furnished: String,
    gatedColony: Boolean,
    front: String,
    depth: String,
    bedrooms: String,
    parking: String,
    boundaryWall: Boolean,
    publishedOn: String,
    propertyPrice: Number,
    propertyAmenities: [{ type: mongoose.Types.ObjectId, ref: "amenity" }],
    impactfulProperty: Boolean,
    propertyStatus: Boolean,
    slug: String

})

propertiesSchema.pre('save', function (next) {
    this.slug = slugify(this.propertyName, { lower: true })
    next()
})

let propertiesModel = mongoose.model("property", propertiesSchema)

module.exports = { propertiesModel }