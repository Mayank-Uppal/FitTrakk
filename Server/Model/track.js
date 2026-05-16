import mongoose from 'mongoose';


const trackSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },
    logs:[{
        steps:{
            type:Number
        },
        totalCalorie:{
            type:Number
        },
        netCalorie:{
            type:Number
        },
        protein:{
            type:Number
        },
        carbs:{
            type:Number
        },
        fat:{
            type:Number
        },
        gym:{
            type:String
        },
        date:{
            type:Date,
            default:Date.now
        }
    }]
},{timestamps:true})

export const trackModel=mongoose.model("trackModel",trackSchema);
