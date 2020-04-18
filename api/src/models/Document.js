const mongoose = require('mongoose')

const DocSchema = mongoose.Schema({
    docName: String,
    creator: String,
    docContent: String,
    shareId: String
})

module.exports = mongoose.model('Document', DocSchema)