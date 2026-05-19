import express from 'express';
import {infoUser,userData} from '../Controllers/infoController.js'
import jwtVerify from '../Middlewares/token.js';
const route=express.Router();

route.get("/user",jwtVerify,userData);
route.post('/objectives',jwtVerify,infoUser);

export default route;