const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:  {type:String,require:true,trim:true} ,// String is shorthand for {type: String}
    salary: {type:Number},
    create: {type:Date,default:Date.now},

},{
    collection:'staffs'
});

const staff = mongoose.model('Staff',schema);
module.exports = staff;