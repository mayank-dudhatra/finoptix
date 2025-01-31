const { log } = require("console");
const { request } = require("http");
const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://127.0.0.1:27017/Finoptix");


connect.then(() => {
    console.log("Database Connected");
})
.catch(() => {
   console.log("Database cannot be connected");
   
});


const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const collection = new mongoose.model("user", LoginSchema);

module.exports = collection;