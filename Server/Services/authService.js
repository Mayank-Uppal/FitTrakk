import sendOTP from "../Config/mail.js"
let OTP;
export const userLogin=async({email})=>{
    try {
        OTP=await sendOTP(email);
        return {message:`Otp sent sucessfully to email ${email}`,status:200}
    } catch (error) {
        throw new Error(`Failed to send OTP to ${email} ${error.message}`);
    }
}

export const userOtp=async({otp})=>{
    try {
        if(otp === OTP){
            return {message:"OTP validated successfully",status:200}
        }
        else{
            throw new Error('OTP not valid') ;
        } 
    } catch (error) {
        throw new Error('Error in authenticating User from OTP ');
    }
}