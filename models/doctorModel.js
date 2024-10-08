const mongoose = require("mongoose");

const doctor = new mongoose.Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
});

module.exports = mongoose.model("Doctor", doctor);