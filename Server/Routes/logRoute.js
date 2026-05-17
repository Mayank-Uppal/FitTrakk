import express from 'express';
import {logUser} from '../Controllers/logController.js'
import jwtVerify from '../Middlewares/token.js';
const route=express.Router();

route.post('/data',jwtVerify,logUser);

export default route;