const mongoose = require('mongoose')

module.exports = mongoose.model('Employee', {
    FullName: { type: String },
    Position: { type: String },
    Location: { type: String },
    Salary: { type: Number },
    Email:{type:String},
    Phone: {type:Number},
    Feedback:{type:String}
})