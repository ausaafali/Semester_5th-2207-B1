let exp = require('express');
let route = require('./routes/router');
let healthInfo = require('./collections/healthinfo');
let personalRecord = require('./collections/personal')
let user = require('./collections/user')
require('dotenv').config();
let db = require('./connect_to_db/connection')

// add user data function
let add_user = async function () {
    try {
        user.create({
            userName: 'John',
            userEmail: 'john@gmail.com',
            userPw: '123456',
            userGender: 'male',
            userAge: 20,
            userAddress: 'street 14/45',
        })
        console.log("Data Added successfully")
    } catch (error) {
        console.error(error);
    }
}

// add personal record data function
let add_personal = async function () {
    try {
        personalRecord.create({
            height: 180,
            weight: 70,
            BMI: 35,
            category: 'genda',
        })
        console.log("Personal Bio added successfully")
    } catch (error) {
        console.error(error);
    }
}
// add healthInfo data function
let add_health = async function () {
    try {
        healthInfo.create({
            sugar: 100,
            heartrate: 90,
            BP: 140,
            colestrol: 170
        })
        console.log("Health recorded successfully")
    } catch (error) {
        console.error(error);
    }
}














let app = exp();
// use routing file
// app.use('/health', healthInfo)
// app.use('/personal', personalRecord)
// app.use('/user', user)

db().then(() => {
    add_personal();
    add_user();
    add_health();
    app.listen(process.env.PORT, () => {
        console.log(`server is running on port http://localhost:${process.env.PORT}/ikrama/route/`);
    })
}).catch((e) => {
    console.log(e)
})