const mongoose = require("mongoose");

const appoinment = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    bookingDate: {
        type: Date,
    },
    message: {
        type: String,
    }
});

module.exports = mongoose.model("Appoinment", appoinment);