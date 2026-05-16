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
            const newUser=new userModel({email:email});
            await newUser.save();
            const accessToken=jwt.sign({userEmail:newUser.email},process.env.secretKey,{expiresIn:"1h"})
            const refreshToken=jwt.sign({userEmail:newUser.email},process.env.secretKey,{expiresIn:"7d"})
            return {message:"OTP validated successfully",accessToken:accessToken,refreshToken:refreshToken,status:200}
        }
        else{
            throw new Error('OTP not valid') ;
        } 
    } catch (error) {
        throw new Error('Error in authenticating User from OTP ');
    }
}