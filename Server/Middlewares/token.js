import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

 const jwtVerify=async(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader)return res.status(404).json("Token not found");
    const token=authHeader.split(' ')[1];
    try {
        const decode=jwt.verify(token,process.env.secretKey);
        req.user=decode;
        next();
    } catch (error) {
        return res.status(500).json(error)
    }
}

export default jwtVerify;