import { userModel } from "../Model/user.js";

export const userLog=async({data})=>{
    try {
        return;
    } catch (error) {
        throw new Error(`Failed to send OTP to ${email} ${error.message}`);
    }
}

export const goalDataUser=async({userId})=>{
    try {
        const user=await userModel.findById(userId);    
        if(!user){
            return {message:"User not found",status:404}
        }
        const data={
            idealCal:user.idealCalorie,
            idealSteps:user.idealSteps,
            idealNetCal:user.idealNetCalorie,
            idealCarbs:user.idealCarbs,
            idealProtein:user.idealProtein,
            idealFat:user.idealFat,
        }
        return {message:"User goal data fetched successfully",data:data,status:200}    
    } catch (error) {
        throw new Error(`Failed to fetch goal data for user ${userId}: ${error.message}`);
    }
}

