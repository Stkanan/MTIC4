const mongoose = require('mongoose');
const Schema = mongoose.Schema;


    /////////// MONGODB SCHEMA ///////////

const eventSchema = new Schema({

   
    nombre:{
        type: String, 
        require:true
    },
    apellido:{
        type: String,
        require:true
    },
  
  /**createdEvents: [
    {
        type:Schema.Types.ObjectId,
        ref: 'Event'    }
    ] 
     */   
});
module.exports=mongoose.model('Event', eventSchema);