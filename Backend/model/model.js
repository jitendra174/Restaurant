const mongoose = require('mongoose')

const SignupSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
});

const UserModel = mongoose.model("UserData", SignupSchema)

module.exports = UserModel;