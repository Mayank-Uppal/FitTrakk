import { userLogin,userOtp,refreshToken} from "../Services/authService.js";

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

export const tokenRefresh=async(req,res)=>{
    try {
        const tokenRefreshResponse=await refreshToken(req.body);
        return res.status(tokenRefreshResponse.status).json(tokenRefreshResponse);
    } catch (error) {
        console.log(error)
        return res.status(500).json("Internal server error")
    }
}