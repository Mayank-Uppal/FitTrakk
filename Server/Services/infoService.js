import { userModel } from "../Model/user.js";
import { fetchIdealPhysique } from "../Config/geminiApi.js";

export const userInfo=async({userEmail},{height,weight,age,goal})=>{
    try {
        const isUser=await userModel.findOne({email:userEmail});
        if(!isUser){return {message:"User not found",status:404}};
        await userModel.findOneAndUpdate({email:userEmail},{height:height,weight:weight,age:age,goal:goal});
        const {idealCalorie,idealProtein,idealCarbs,idealFats,idealSteps,idealNetCalorie}=await fetchIdealPhysique({height,weight,age,goal});
        await userModel.findOneAndUpdate({email:userEmail},{idealCalorie:idealCalorie,idealProtein:idealProtein,idealCarbs:idealCarbs,idealFat:idealFats,idealSteps:idealSteps,idealNetCalorie:idealNetCalorie});
        return {message:"User information updated successfully and ideal physique fetched",status:200}
    } catch (error) {
        throw new Error(`Failed to calculate the ideal physique for user  ${error.message}`);
    }
}
