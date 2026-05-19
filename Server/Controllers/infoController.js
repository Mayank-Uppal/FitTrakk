import {userInfo,dataUser} from '../Services/infoService.js';

export const infoUser=async(req,res)=>{
    try {
        const infoUserResponse=await userInfo(req.user,req.body);
        return res.status(infoUserResponse.status).json(infoUserResponse);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}

export const userData=async(req,res)=>{
    try {
        const userDataResponse=await dataUser(req.user);
        return res.status(userDataResponse.status).json(userDataResponse);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}