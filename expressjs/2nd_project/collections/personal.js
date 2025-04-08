let goose = require('mongoose');

let personalRecord = goose.Schema({
    height: {
        type: Number, required: true
    },
    weight: {
        type: Number, required: true
    },
    BMI: {
        type: String, required: true
    },
    category: {
        type: String, required: true
    },
    created_at: {
        type: Date, default: Date.now
    }
})

module.exports = goose.model('personal_record', personalRecord)