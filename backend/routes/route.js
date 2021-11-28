//routes.js
import express from 'express';
import {getUsuarios} from '../controllers/usuario-controller.js';


const route= express.Router();
 
//find
route.get('/usuarios',getUsuarios);

//add
//route.post('/usuarios',addUsuarios)

//

export default route;
