import {userLog} from '../Services/logService.js';

export const logUser=async(req,res)=>{
    try {
        const logUserResponse=await userLog(req.body);
        return res.status(logUserResponse.status).json(logUserResponse);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}
