const mongoose = require('mongoose');
const Schema = mongoose.Schema;



    /////////// MONGODB SCHEMA ///////////

const userSchema = new Schema({

   //_id:_ID,
    nombre:{type: String, 
        require:true},

    apellido:{type: String,
        require:true},
    
    email:{type: String,
        require:true},
        
    contraseña:{type: String,
        require:true}, 

    Identificacion:{type: String,
        require:true},     

    rol:{type: String,
        require:true}, 

    estado:{type: String,
        require:true},


        /**
        createdUsers: [
        {
            type:Schema.Types.ObjectId,
            ref: 'User'
        }
        ] */
    
});
module.exports=mongoose.model('User', userSchema);


