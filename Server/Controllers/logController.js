import {userLog,goalDataUser} from '../Services/logService.js';

export const logUser=async(req,res)=>{
    try {
        const logUserResponse=await userLog(req.body);
        return res.status(logUserResponse.status).json(logUserResponse);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}

export const userGoalData=async(req,res)=>{
    try {
        const userGoalDataResponse=await goalDataUser(req.user);
        return res.status(userGoalDataResponse.status).json(userGoalDataResponse);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}