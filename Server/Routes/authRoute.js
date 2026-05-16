import express from 'express';
import {loginUser,otpUser} from '../Controllers/authController.js'
const route=express.Router();

route.post('/login',loginUser);
route.post('/otp-validate',otpUser)

export default route;