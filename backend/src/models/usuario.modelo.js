const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuariosSchema= new Schema({
 
    nombres:{type:String, required:[true,'Nombre obligatorio']},
    apellidos:String,
    cusername:String,
    psw:String,
    IDFacultadnombre:String,
    datereg:{type:Date,default:Date.now}
    

})

module.exports= mongoose.model('usuarios',UsuariosSchema)
