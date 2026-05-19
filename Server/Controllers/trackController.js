import { mealAdd,stepsAdd,gymAdd,dataAll,dataBoard,logsAll } from "../Services/trackService.js";

export const addMeal=async(req,res)=>{
    try {
        const addMealResponse=await mealAdd(req.user,req.body);
        return res.status(addMealResponse.status).json(addMealResponse);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}

export const addSteps=async(req,res)=>{
    try {
        const addStepsResponse=await stepsAdd(req.user,req.body);
        return res.status(addStepsResponse.status).json(addStepsResponse);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}
export const addGym=async(req,res)=>{
    try {
        const addGymResponse=await gymAdd(req.user,req.body);
        return res.status(addGymResponse.status).json(addGymResponse);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}
export const allData=async(req,res)=>{
    try {
        const allDataResponse=await dataAll(req.user,req.query);
        return res.status(allDataResponse.status).json(allDataResponse);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}

export const boardData=async(req,res)=>{
    try {
        const boardDataResponse=await dataBoard(req.user);
        return res.status(boardDataResponse.status).json(boardDataResponse);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}

export const allLogs=async(req,res)=>{
    try {
        const allLogsResponse=await logsAll(req.user);
        return res.status(allLogsResponse.status).json(allLogsResponse);
    } catch (error) {
        return res.status(500).json("Internal server error");
    }
}


