import { userLogin,userOtp } from "../Services/authService.js";

export const loginUser=async(req,res)=>{
    try {
        const loginUserResponse=await userLogin(req.body);
        return res.status(loginUserResponse.status).json(loginUserResponse);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal server error")
    }
}

export const otpUser=async(req,res)=>{
    try {
        const otpUserResponse=await userOtp(req.body);
        return res.status(otpUserResponse.status).json(otpUserResponse);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal server error")
    }
}
