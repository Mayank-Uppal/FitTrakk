import {userInfo} from '../Services/infoService.js';

export const infoUser=async(req,res)=>{
    try {
        const infoUserResponse=await userInfo(req.body);
        return res.status(infoUserResponse.status).json(infoUserResponse);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}