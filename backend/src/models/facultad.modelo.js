const mongoose = require('mongoose')
const {Schema}= mongoose
 
const FacultadSchema = new Schema({
IDFacultadnombre:String,
nombreFac:String,
})
 
module.exports= mongoose.model('facultad',FacultadSchema)
