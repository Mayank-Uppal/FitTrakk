import { userModel } from "../Model/user.js";
import { fetchIdealPhysique } from "../Config/geminiApi.js";
import { use } from "react";

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

export const dataUser=async({userId})=>{
    try {
        console.log(userId)
        const user=await userModel.findById(userId);
        if(!user)return {message:"User not found",status:404};
        const isinfo=!!(user.height,user.weight,user.age,user.goal);
        return {data:isinfo,status:200}
    } catch (error) {
        throw new Error(`Failed to calculate the ideal physique for user  ${error.message}`);
    }
}