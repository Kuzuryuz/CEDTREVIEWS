const mongoose = require('mongoose');

const Item = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Items = mongoose.model('Items', Item);

module.exports = Items;