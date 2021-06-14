const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:  {type:String,require:true,trim:true} ,// String is shorthand for {type: String}
    photo: {type:String,default:'nopic.png'},
    location: {
        lat:Number,
        lgn:Number
    },
},{
    toJSON:{virtuals:true},
    timestamps:true,
    collection:'shops'
});

schema.virtual('menus',{
    ref:'Menu' ,//ลิ้งไปเมนูโมเดล
    localField: '_id' , //_id field model shop
    foreignField : 'shop'  //fk
})
const shop = mongoose.model('Shop',schema);
module.exports = shop;