const express = require("express")
const adminRoute = express()

const bodyParser = require("body-parser")
adminRoute.use(bodyParser.json())
adminRoute.use(bodyParser.urlencoded({extended:true}))

// controllers require
const userController = require("../controllers/user/userController")

// login admin

adminRoute.post("/appoinment",userController.addAppoinment)

adminRoute.get("/get-appoinment",userController.getAppoinments)


module.exports = adminRoute;