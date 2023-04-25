const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require('./models/Students')

const cors = require('cors')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ktmongodb:45069Tan@cluster0.chs8b4i.mongodb.net/StudentArchive");

app.get("/getStudents", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createStudent", async (req, res) => {
    const student = req.body;
    const newStudent = new UserModel(student);
    await newStudent.save();

    res.json(newStudent);
});

app.post("/updateStudent", async (req, res) => {
    const student = req.body;
    const newStudent = new UserModel(student);
    await newStudent.save();

    res.json(newStudent);
});

app.delete("/deleteStudent", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Server is running");
});

//ktmongodb 4T