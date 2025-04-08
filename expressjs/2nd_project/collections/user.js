let goose = require('mongoose');

let userCollection = goose.Schema({
    userName: {
        type: String, required: true
    },
    userEmail: {
        type: String, required: true
    },
    userPw: {
        type: String, required: true
    },
    userGender: {
        type: String, required: true
    },
    userAge: {
        type: Number, required: true
    },
    userAddress: {
        type: String, required: true
    },
    created_at: {
        type: Date, default: Date.now
    }
})

module.exports = goose.model('users', userCollection)