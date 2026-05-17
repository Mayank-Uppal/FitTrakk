import {userInfo} from '../Services/infoService.js';

export const infoUser=async(req,res)=>{
    try {
        console.log("controller hit!")        // ✅ is this printing?
        console.log("req.user:", req.user)    // ✅ is token decoded?
        console.log("req.body:", req.body)
        const infoUserResponse=await userInfo(req.user,req.body);
        return res.status(infoUserResponse.status).json(infoUserResponse);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}