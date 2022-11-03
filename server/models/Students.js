const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    major: {
        type: String,
        required: true,
    },
    nameDotNumber: {
        type: String,
        required: true,
    },

});

const UserModel = mongoose.model("students", StudentSchema);
module.exports = UserModel;