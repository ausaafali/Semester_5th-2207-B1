let goose = require('mongoose');

let healthInfo = goose.Schema({
    sugar: {
        type: Number, required: true
    },
    heartrate: {
        type: Number, required: true
    },
    BP: {
        type: Number, required: true
    },
    colestrol: {
        type: Number, required: true
    },
    created_at: {
        type: Date, default: Date.now
    }
})

module.exports = goose.model('health_info', healthInfo)