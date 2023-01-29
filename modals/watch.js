const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    details1: {
        type: String,
        require: true
    },
    details2: {
        type: String,
        require: true
    },
    details3: {
        type: String,
        require: true
    },
    details4: {
        type: String,
        require: true
    },
    details5: {
        type: String,
        require: true
    }
})


const watchSchema = new mongoose.Schema({

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
    detail: [
        detailSchema
    ],
    img: {
        type: String,
        require: true
    }

})

module.exports = mongoose.models.watchCollection || mongoose.model('watchCollection', watchSchema)