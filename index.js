const express = require("express")
const app = express()

require('dotenv').config();

const mongoose = require("mongoose")
const noCache = require('nocache');
const cors = require('cors')

mongoose.connect('mongodb+srv://mohdhaneenpk666:mP6YS3N4sh8dXhFC@skintask.5ttgv.mongodb.net/?retryWrites=true&w=majority&appName=skintask')
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