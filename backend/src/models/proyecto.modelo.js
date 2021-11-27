const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProyectoSchema= new Schema({
 
    nombres:{type:String, required:[true,'Nombre obligatorio']},
    id:String,
    projectname:String,
    IDFacultadnombre:String,
    datereg:{type:Date,default:Date.now}
    

})

module.exports= mongoose.model('proyectos',ProyectoSchema)