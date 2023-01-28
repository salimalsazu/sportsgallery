const mongoose = require('mongoose');

const sportingsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please name the Sport'],
        maxlength: [300, 'Please Keep the title short'],
    },

    price: {
        type: Number,
        require: true,
    },



})

module.exports = mongoose.models.Sportings || mongoose.model('Sportings', sportingsSchema)