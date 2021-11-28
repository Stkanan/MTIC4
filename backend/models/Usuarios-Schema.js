import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    nombreU: String,
    apellidosU: String,
    correoU: String,
    telefonoU: Number
});
