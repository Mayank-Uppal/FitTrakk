import express from 'express';
import {infoUser} from '../Controllers/infoController.js'
import jwtVerify from '../Middlewares/token.js';
const route=express.Router();


route.post('/objectives',jwtVerify,infoUser);
export default route;