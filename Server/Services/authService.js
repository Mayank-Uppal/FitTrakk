import sendOTP from "../Config/mail.js"
import jwt from "jsonwebtoken";
import { userModel } from "../Model/user.js";

let OTP;
export const userLogin=async({email})=>{
    try {
        OTP=await sendOTP(email);
        return {message:`Otp sent sucessfully to email ${email}`,status:200}
    } catch (error) {
        throw new Error(`Failed to send OTP to ${email} ${error.message}`);
    }
}

export const userOtp=async({email,otp})=>{
    try {
        if(otp === OTP){
            let isuser=await userModel.findOne({email:email});
            if(!isuser){
                isuser=new userModel({email:email});
                await isuser.save();
            }
            const accessToken=jwt.sign({userId:isuser._id,userEmail:isuser.email },process.env.secretKey,{expiresIn:"1h"})
            const refreshToken=jwt.sign({userId:isuser._id,userEmail:isuser.email},process.env.secretKey,{expiresIn:"7d"})
            return {message:"OTP validated successfully",accessToken:accessToken,refreshToken:refreshToken,status:200}
            }
            return {message:"Invalid OTP",status:401}
    } catch (error) {
        throw new Error('Error in authenticating User from OTP ');
    }
}

export const refreshToken=async({refreshToken})=>{
    try {
        console.log("user token")
        const istoken=jwt.verify(refreshToken,process.env.secretKey);
        const accessToken=jwt.sign({userId:istoken.userId,userEmail:istoken.userEmail},process.env.secretKey,{expiresIn:"1h"});
        return {message:"Access Token send",status:200,accessToken:accessToken};
    } catch (error) {
        throw new Error('Error in retruning the access token User from OTP ');
    }
}