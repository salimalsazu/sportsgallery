const mongoose = require('mongoose');



const stockSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    sku: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    }

})

module.exports = mongoose.models.stockCollection || mongoose.model('stockCollection', stockSchema)