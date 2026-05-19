import express from 'express';
import {loginUser,otpUser,tokenRefresh} from '../Controllers/authController.js'
import jwtVerify from '../Middlewares/token.js';
const route=express.Router();


route.post('/login',loginUser);
route.post('/otp-validate',otpUser)
route.post('/refresh',tokenRefresh);

export default route;