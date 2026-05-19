import express from 'express';
import {addMeal,addSteps,addGym,allData,boardData,allLogs} from '../Controllers/trackController.js'
import jwtVerify from '../Middlewares/token.js';
const route=express.Router();

route.get('/',jwtVerify,allData);
route.get('/dashboard',jwtVerify,boardData);
route.get('/all-logs',jwtVerify,allLogs);
route.post('/meal',jwtVerify,addMeal);
route.post('/steps',jwtVerify,addSteps);
route.post('/gym',jwtVerify,addGym);

export default route;