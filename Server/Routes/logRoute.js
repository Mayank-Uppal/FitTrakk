import express from 'express';
import {userGoalData} from '../Controllers/logController.js'
import jwtVerify from '../Middlewares/token.js';
const route=express.Router();


route.get("/goalData",jwtVerify,userGoalData);

export default route;