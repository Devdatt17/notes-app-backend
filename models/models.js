const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    _id: {
        required: false,
        type: String
    },
    title: {
        required: false,
        type: String
    },
    message: {
        required: false,
        type: String
    },
    lastModified: {
        required: false,
        type: Date
    }

})

module.exports = mongoose.model('Data',dataSchema)
