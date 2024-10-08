const express = require("express")
const adminRoute = express()

const bodyParser = require("body-parser")
adminRoute.use(bodyParser.json())
adminRoute.use(bodyParser.urlencoded({extended:true}))

// controllers require
const mainController = require("../controllers/doctor/mainController")

adminRoute.post("/login",mainController.login)

module.exports = adminRoute;