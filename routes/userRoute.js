const express = require("express")
const adminRoute = express()

const bodyParser = require("body-parser")
adminRoute.use(bodyParser.json())
adminRoute.use(bodyParser.urlencoded({extended:true}))

// controllers require
const userController = require("../controllers/user/userController")

// login admin

adminRoute.post("/appoinment",userController.addAppoinment)

// adminRoute.get("/login",auth.isLogout,loginSignupController.loadLogin)

// adminRoute.post("/login",loginSignupController.verifyLogin)

// adminRoute.get("/logout",auth.isLogin,loginSignupController.logout)

// adminRoute.get("/dashboard",auth.isLogin,mainController.loadDashboard)

// // Sales Repot

// adminRoute.get("/sales-report",auth.isLogin,mainController.loadSalesReport)

// adminRoute.post("/sales-report",auth.isLogin,mainController.loadSalesReport)



module.exports = adminRoute;