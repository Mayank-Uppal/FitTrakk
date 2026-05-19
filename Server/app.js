import express from 'express';
import {connectDB} from './Config/db.js';
import cors from 'cors'
import logRoute from './Routes/logRoute.js';
import infoRoute from './Routes/infoRoute.js';
import authRoute from './Routes/authRoute.js';
import trackRoute from './Routes/trackRoute.js';
const app=express();
app.use(cors());
app.use(express.json());
connectDB();

app.use('/log',logRoute);
app.use('/',infoRoute);
app.use('/auth',authRoute);
app.use('/track',trackRoute);

app.listen(5001,()=>{
    console.log("Server is running on port 5001");
})  

