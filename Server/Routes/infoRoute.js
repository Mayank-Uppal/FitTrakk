import express from 'express';
import {infoUser} from '../Controllers/infoController.js'
const route=express.Router();

route.post('/objectives',infoUser);

export default route;