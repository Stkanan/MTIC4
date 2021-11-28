import express from 'express';
import mongoose from 'mongoose';
import route from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',route);
app.use(cors());


const URL = "mongodb://h34:1234@cluster0-shard-00-00.udzwe.gcp.mongodb.net:27017,cluster0-shard-00-01.udzwe.gcp.mongodb.net:27017,cluster0-shard-00-02.udzwe.gcp.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";


const PORT = 8000
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { 
    
    app.listen(PORT, () => console.log(`Servido ejecuntando en el puerto: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})
