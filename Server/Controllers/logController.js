import {goalDataUser} from '../Services/logService.js';

export const userGoalData=async(req,res)=>{
    try {
        const userGoalDataResponse=await goalDataUser(req.user);
        return res.status(userGoalDataResponse.status).json(userGoalDataResponse);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}