const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    firstname: String,
    lastname: String,
    password: String,
    industry: String
})

module.exports = mongoose.model('User', userSchema)