const mongoose = require("mongoose")
const productschma = new mongoose.Schema({
 name:{
    type:String
 },
 mrp:{
    type:Number
 },
 img:{
   type:String
 },
 presp:{
    type:Boolean
 },
 brand:{
    type:String
 },
 saltcomp:{
    type:String
 },
 storage:{
    type:String
 },
 prodinfo:{
    type:String
 },
 usesof:{
    type:String
 },
 benifitof:{
   type:String
 },
 sideeffect:{
   type:Object
 }
    
})
module.exports = mongoose.model('Product',productschma)