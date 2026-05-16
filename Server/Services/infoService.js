import { userModel } from "../Model/user.js";

export const userInfo=async({email,height,weight,age,goal})=>{
    try {
        const isUser=await userModel.findOne({email:email});
        if(!isUser){return {message:"User not found",status:404}};
        await userModel.findOneAndUpdate({email:email},{height:height,weight:weight,age:age,goal:goal});
        const {idealCalorie,idealProtein,idealCarb,idealFats,idealSteps,idealNetCalorie}=await fetchIdealPhysique(height,weight,age,goal);
        await userModel.findOneAndUpdate({email:email},{idealCalorie:idealCalorie,idealProtein:idealProtein,idealCarbs:idealCarb,idealFat:idealFats,idealSteps:idealSteps,idealNetCalorie:idealNetCalorie});
        return {message:"User information updated successfully and ideal physique fetched",status:200}
    } catch (error) {
        throw new Error(`Failed to calculate the ideal physique for user  ${error.message}`);
    }
}
