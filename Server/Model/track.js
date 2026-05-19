import mongoose from 'mongoose';


const trackSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },
    logs:[{
        steps:{
            type:Number,
            default:0
        },
        totalCalorie:{
            type:Number,
            default:0
        },
        calBurn:{
            type:Number,
            default:0
        },
        protein:{
            type:Number,
            default:0
        },
        carbs:{
            type:Number,
            default:0
        },
        fat:{
            type:Number,
            default:0
        },
        gym:{
            type:Number,
            default:0
        },
        netcalorie:{
            type:Number,
            default:0
        },
        date:{
            type:Date,
            default:Date.now
        }
    }],
    meals:[{
            qty:{type:Number,default:0},
            meal:{type:String},
            calorie:{type:Number,default:0},
            protein:{type:Number,default:0},
            carbs:{type:Number,default:0},
            fat:{type:Number,default:0},
            time: { type: Date, default: Date.now }
        }],
},{timestamps:true})

export const trackModel=mongoose.model("trackModel",trackSchema);
