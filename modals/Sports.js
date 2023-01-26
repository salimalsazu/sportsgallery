const mongoose = require('mongoose');

const sportingsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please name the Sport'],
        unique: true,
        maxlength: [300, 'Please Keep the title short'],
        trim: true
    },
    photo: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        require: true,
    }


})

module.exports = mongoose.models.Sportings || mongoose.model('Sportings', sportingsSchema)
