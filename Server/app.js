import express from 'express';
import {connectDB} from './Config/db.js';
import cors from 'cors'
import logRoute from './Routes/logRoute.js';
import infoRoute from './Routes/infoRoute.js';
import authRoute from './Routes/authRoute.js';

const app=express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/log',logRoute);
app.use('/info',infoRoute);
app.use('/auth',authRoute);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})  

