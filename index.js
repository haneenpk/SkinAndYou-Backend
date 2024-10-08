const express = require("express")
const app = express()

require('dotenv').config();

const mongoose = require("mongoose")
const noCache = require('nocache');
const cors = require('cors')

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log(err))

app.use(noCache());

app.use(cors({
    credentials: true,
    origin: process.env.CORS_URI
}))

const doctorRoute = require("./routes/doctorRoute")
const userRoute = require("./routes/userRoute")


app.use("/api/user", userRoute)

app.use("/api/doctor", doctorRoute)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server Running on port ${PORT}...`));