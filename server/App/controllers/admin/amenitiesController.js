const { amenitiesModel } = require("../../models/amenitiesModel")
let fs = require("fs")

let insertAmenities = async (req, res) => {
    let { title } = req.body
    let obj;
    try {
        let insertObj = {
            title,
            status: true
        }

        if (req.file) {
            insertObj["image"] = req.file.filename
        }

        let data = await amenitiesModel.insertOne(insertObj)

        obj = {
            status: 1,
            msg: "Amenities Added Successfully !"
        }
        res.send(obj)
    }
    catch {
        if (title == '') {
            obj = {
                status: 0,
                msg: "Please fill Amenities title !"
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

let viewAmenities = async (req, res) => {
    let {currentPage,title} = req.query
    let limit = 4;

    let finalSkip = (currentPage-1)*limit
    let searchObj = {}
    
    if(title !='')
    searchObj['title'] = { $regex: title, $options: 'i' }


    let data = await amenitiesModel.find(searchObj).skip(finalSkip).limit(limit)

    let totalRecords = await amenitiesModel.find(searchObj)

    let obj = {
        status: 1,
        msg: "Amenities List viewed !",
        totalRecords: (totalRecords.length),
        pages:Math.ceil((totalRecords.length)/limit),
        staticPath: process.env.AMENITYIMAGEPATH,
        data
    }
    res.send(obj)
}

let deleteAmenities = async (req, res) => {
    let { ids } = req.body
    let obj;

    if (ids != 0) {
        let amenities = await amenitiesModel.find({ _id: ids }).select("image")
        for (let v of amenities) {
            let deletePath = 'uploads/amenities/' + v.image
            if(fs.existsSync(deletePath)){
            fs.unlinkSync(deletePath)
            }
            else{
                console.log("File Does not exist, skipping deletion");
            }
        }

        await amenitiesModel.deleteMany({ _id: ids })
        obj = {
            status: 1,
            msg: "Amenities List deleted Successfully !",
        }
        res.send(obj)
    }
    else {
        obj = {
            status: 0,
            msg: "Please select Amenities List !",
        }
        res.send(obj)
    }
}

let changeStatus = async (req, res) => {
    let { ids } = req.body

    let obj
    if (ids != 0) {
        await amenitiesModel.updateMany({ _id: ids }, [{ $set: { status: { $not: "$status" } } }])
        obj = {
            status: 1,
            msg: "Amenities status changed Successfully !",
        }
        res.send(obj)
    }
    else {
        obj = {
            status: 0,
            msg: "Please select Amenities List !",
        }
        res.send(obj)
    }
}

let singleData = async (req,res) =>{
    let {id} = req.params

    let data = await amenitiesModel.findOne({_id:id})
    let obj = {
            status: 1,
            msg: "Amenities single data !",
            staticPath: process.env.AMENITYIMAGEPATH,
            data
        }
        res.send(obj)
}

let updateAmenities = async (req, res) => {
    let {id} = req.params
    let {title} = req.body
    console.log(id);
        
    let obj;
    if(id!=0) {
        let amenities = await amenitiesModel.find({ _id: id }).select("image")
        console.log(amenities);
        
        for (let v of amenities) {
            let deletePath = 'uploads/amenities/' + v.image
            try{
                fs.unlinkSync(deletePath)
            }
            catch(error){
                if(error.code !== 'ENOENT'){
                    throw error
                }
                console.log("File wasalready deleted.")
            }
        }
        let updateObj = {
            title,
            status: true
        }

        if (req.file) {
            updateObj["image"] = req.file.filename
        }

        let data = await amenitiesModel.updateOne({_id: id},{$set: updateObj})

        obj = {
            status: 1,
            msg: "Amenities Updated Successfully !"
        }
        res.send(obj)
    }
    else {
        if (title == '') {
            obj = {
                status: 0,
                msg: "Please fill Amenities title !"
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
module.exports = { insertAmenities, viewAmenities, deleteAmenities,changeStatus, singleData, updateAmenities }