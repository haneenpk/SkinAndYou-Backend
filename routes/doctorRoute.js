const express = require("express")
const adminRoute = express()

const bodyParser = require("body-parser")
adminRoute.use(bodyParser.json())
adminRoute.use(bodyParser.urlencoded({extended:true}))

// controllers require
const mainController = require("../controllers/doctor/mainController")

// login admin

adminRoute.post("/login",mainController.login)

// adminRoute.get("/login",auth.isLogout,loginSignupController.loadLogin)

// adminRoute.post("/login",loginSignupController.verifyLogin)

// adminRoute.get("/logout",auth.isLogin,loginSignupController.logout)

// adminRoute.get("/dashboard",auth.isLogin,mainController.loadDashboard)

// // Sales Repot

// adminRoute.get("/sales-report",auth.isLogin,mainController.loadSalesReport)

// adminRoute.post("/sales-report",auth.isLogin,mainController.loadSalesReport)



module.exports = adminRoute;