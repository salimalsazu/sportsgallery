const mongoose = require('mongoose');


const watchSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
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
    sku: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    }

})

module.exports = mongoose.models.orderCollection || mongoose.model('orderCollection', watchSchema)