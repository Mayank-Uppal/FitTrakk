import express from 'express';
import {logUser} from '../Controllers/logController.js'
const route=express.Router();

route.post('/data',logUser);

export default route;