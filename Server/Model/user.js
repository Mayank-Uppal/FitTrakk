import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    weight:{
        type:Number
    },
    height:{
        type:Number
    },
    age:{
        type: Number,
    },
    goal:{
        type:String
    }
},{timestamps:true})

export const userModel=mongoose.model("userModel",userSchema);
