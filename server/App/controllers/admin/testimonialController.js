const { testimonialModel } = require("../../models/testimonialModel");
const fs = require("fs")

let insertTestimonial = async (req, res) => {
    let { title, message, designation } = req.body
    let obj;
    try {
        let insertObj = {
            title,
            message,
            designation,
            status: true
        }

        if (req.file) {
            insertObj['image'] = req.file.filename
        }

        let data = await testimonialModel.insertOne(insertObj)
        obj = {
            status: 1,
            msg: "Testimonial Added Successfully !"
        }
        res.send(obj)
    }
    catch {
        if (title == '') {
            obj = {
                status: 0,
                msg: "Please fill title field !"
            }
            res.send(obj)
        }
        if (message == '') {
            obj = {
                status: 0,
                msg: "Please fill message field !"
            }
            res.send(obj)
        }
        if (designation == '') {
            obj = {
                status: 0,
                msg: "Please fill designation field !"
            }
            res.send(obj)
        }
        if (!req.file) {
            obj = {
                status: 0,
                msg: "Please provide image !"
            }
            res.send(obj)
        }
    }
}

let viewTestimonialData = async (req, res) => {
    let data = await testimonialModel.find()

    let obj = {
        status: 1,
        msg: "Testimonial Data viewed !",
        staticPath: process.env.TESTIMONIALSIMAGEPATH,
        data
    }
    res.send(obj)
}

let deleteTestimonial = async (req, res) => {
    let { ids } = req.body

    if (ids != 0) {
        let testimonials = await testimonialModel.find({ _id: ids }).select("image")
        for (let v of testimonials) {
            let deletePath = 'uploads/testimonial/' + v.image
            fs.unlinkSync(deletePath)
        }

        await testimonialModel.deleteMany({ _id: ids })
        let obj = {
            status: 1,
            msg: "Testimonial deleted Successfully !",

        }
        res.send(obj)
    }
    else {
        let obj = {
            status: 0,
            msg: "Please Select Testimonial !",
        }
        res.send(obj)
    }
}

let changeStatus = async (req, res) => {
    let { ids } = req.body

    if (ids != 0) {
        await testimonialModel.updateMany({ _id: ids }, [{ $set: { status: { $not: "$status" } } }])
        let obj = {
            status: 1,
            msg: "Testimonial Status changed Successfully !",
        }
        res.send(obj)
    }
    else {
        let obj = {
            status: 0,
            msg: "Please Select Testimonial !",
        }
        res.send(obj)
    }
}

let singleTestimonialData = async (req,res)=>{
    let {id} = req.params

    let data = await testimonialModel.findOne({_id: id})
    let obj = {
            status: 1,
            msg: "Single Testimonial !",
            staticPath: process.env.TESTIMONIALSIMAGEPATH,
            data
        }
        res.send(obj)
}

let updateTestimonial = async (req,res) =>{
    let {id} = req.params
    let {title, designation, message} = req.body

    if(id) {
        let testimonialImg = await testimonialModel.find({_id: id}).select('image')
        for(let v of testimonialImg){
            let deletePath = 'uploads/testimonial/'+v.image
            fs.unlinkSync(deletePath)
        }

        let updateObj = {
            title,
            message,
            designation,
            status: true
        }

        if (req.file) {
            updateObj['image'] = req.file.filename
        }

        await testimonialModel.updateOne({_id: id},{$set: updateObj})
        obj = {
            status: 1,
            msg: "Testimonial Updated Successfully !"
        }
        res.send(obj)
    }
    else {
        if (title == '') {
            obj = {
                status: 0,
                msg: "Please fill title field !"
            }
            res.send(obj)
        }
        if (message == '') {
            obj = {
                status: 0,
                msg: "Please fill message field !"
            }
            res.send(obj)
        }
        if (designation == '') {
            obj = {
                status: 0,
                msg: "Please fill designation field !"
            }
            res.send(obj)
        }
        if (!req.file) {
            obj = {
                status: 0,
                msg: "Please provide image !"
            }
            res.send(obj)
        }
    }
}

module.exports = { insertTestimonial, viewTestimonialData, deleteTestimonial, changeStatus, singleTestimonialData,updateTestimonial }