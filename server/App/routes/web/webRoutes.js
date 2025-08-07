let express = require("express")
const { homePageRoutes } = require("./homePageRoutes")

let webRoutes = express.Router()

webRoutes.use('/home', homePageRoutes)

module.exports = {webRoutes}