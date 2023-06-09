const {model, Schema} = require('mongoose')

module.exports = model('Teacher', new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    password: String,
    subject: String,
    group: [
        {
           title: String,
           time: Date,
           students: [Number] 
        }
    ]

},{timestamps: true}))