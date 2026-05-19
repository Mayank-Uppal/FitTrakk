import { userModel } from "../Model/user.js";
import { trackModel } from "../Model/track.js";
import { calCalorie } from "../Config/geminiApi.js";

export const mealAdd =async({userId},{qty,meal})=>{
    try {
        const user=await userModel.findById(userId);
        if(!user){
            return {message:"User Not found",status:404};
        }
        const {calorie,protein,carbs,fat}=await calCalorie({qty,meal});

        let track = await trackModel.findOne({userId})
        if(!track)track=new trackModel({userId,logs:[]})
        const today = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
        const logExist = track.logs.find(log => 
            new Date(log.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }) === today
        )
        
        if(logExist){
            logExist.totalCalorie+=Number(calorie)
            logExist.protein+=Number(protein)
            logExist.carbs+=Number(carbs)
            logExist.fat+=Number(fat)
            logExist.netcalorie = Number(Number(logExist.totalCalorie) - Number(logExist.calBurn))
            track.meals.push({qty:Number(qty),meal:meal,calorie:Number(calorie),protein:Number(protein),carbs:Number(carbs),fat:Number(fat)})
            await track.save();
            return {message:"Meal Calculated and saved successfully",data:{totalCalorie:logExist.totalCalorie,protein:logExist.protein,carbs:logExist.carbs,fat:logExist.fat,netcalorie:logExist.netcalorie,steps:logExist.steps,gym:logExist.gym,meal:{qty,meal,calorie,protein,carbs,fat}},status:200};

        }else {
            track.logs.push({ totalCalorie: calorie, protein, carbs, fat,netcalorie:calorie })
            track.meals.push({qty:qty,meal:meal,calorie:calorie,protein:protein,carbs:carbs,fat:fat})
            await track.save();
            return { data: { totalCalorie: Number(calorie), protein: Number(protein), carbs: Number(carbs), fat: Number(fat), netcalorie: Number(calorie), steps: 0, gym: 0,meal:{qty,meal,calorie,protein,carbs,fat} }, status: 200 }
        }
    } catch (error) {
        console.log("EXACT ERROR:", error.message) // ✅ add this
        throw new Error(`Failed to find and save calories: ${error.message}`)
    }
}

export const stepsAdd=async({userId},{steps,calBurn})=>{
    try {
        const user=await userModel.findById(userId);
        if(!user){
            return {message:"User Not found",status:404};
        }
        let track = await trackModel.findOne({userId})
        if(!track)track=new trackModel({userId,logs:[]})
        const today = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
        const logExist = track.logs.find(log => 
            new Date(log.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }) === today
        )
        if(logExist){
            logExist.calBurn+=Number(calBurn)
            logExist.steps+=Number(steps)
            logExist.netcalorie=Number(logExist.totalCalorie) - Number(logExist.calBurn) 

            await track.save();
                  return {message:"Steps Calculated and saved successfully",data:{totalCalorie:logExist.totalCalorie,protein:logExist.protein,carbs:logExist.carbs,fat:logExist.fat,netcalorie:logExist.netcalorie,steps:logExist.steps,gym:logExist.gym},status:200};
        }else {
            track.logs.push({ calBurn:calBurn,steps:steps,netcalorie:-calBurn })
            await track.save();
            return { message: "Saved", data: { totalCalorie: 0, protein: 0, carbs: 0, fat: 0, netcalorie: -Number(calBurn), steps: Number(steps), gym: 0 }, status: 200 }
        }        
    } catch (error) {
        console.log("EXACT ERROR:", error.message) // ✅ add this
    throw new Error(`Failed to find and save calories: ${error.message}`)
    }
}

export const gymAdd=async({userId},{time,calBurn})=>{
    try {
        const user=await userModel.findById(userId);
        if(!user){
            return {message:"User Not found",status:404};
        }
        let track = await trackModel.findOne({userId})
        if(!track)track=new trackModel({userId,logs:[]})
        const today = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })
        const logExist = track.logs.find(log => 
            new Date(log.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }) === today
        )
        if(logExist){
            logExist.calBurn+=Number(calBurn)
            logExist.gym+=Number(time)
            logExist.netcalorie=Number(logExist.totalCalorie) - Number(logExist.calBurn)
            await track.save();
                  return {message:"Steps Calculated and saved successfully",data:{totalCalorie:logExist.totalCalorie,protein:logExist.protein,carbs:logExist.carbs,fat:logExist.fat,netcalorie:logExist.netcalorie,steps:logExist.steps,gym:logExist.gym},status:200};
        }else {
            track.logs.push({calBurn:calBurn,gym:time,netcalorie:-calBurn })
            await track.save();
            return { message: "Saved", data: { totalCalorie: 0, protein: 0, carbs: 0, fat: 0, netcalorie: -Number(calBurn), steps: 0, gym: Number(time) }, status: 200 }
        }
    } catch (error) {
        console.log("EXACT ERROR:", error.message) // ✅ add this
    throw new Error(`Failed to find and save calories: ${error.message}`)
    }

}

export const dataAll=async({userId},{date})=>{
    try {
        const user=await userModel.findById(userId);
        if(!user){
            return {message:"User Not found",status:404};
        }
        let track = await trackModel.findOne({userId})
        const emptyLog = { totalCalorie: 0, protein: 0, carbs: 0, fat: 0, netcalorie: 0, steps: 0, gym: 0, calBurn: 0 }
        if(!track)return {data:emptyLog,status:200};
        const log=track.logs.find(log=>new Date(log.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })===date)
        const logData={totalCalorie:log.totalCalorie,protein:log.protein,carbs:log.carbs,fat:log.fat,netcalorie:log.netcalorie,steps:log.steps,gym:log.gym};
        const mealData=track.meals.filter(m=>new Date(m.time).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })===date)
        return {data:{logData,mealData }|| emptyLog,status:200}
    } catch (error) {
        console.log("EXACT ERROR:", error.message) 
        throw new Error(`Failed to find and save calories: ${error.message}`)
    }
}

export const dataBoard=async({userId})=>{
    try {
        const user=await userModel.findById(userId);
        if(!user){
            return {message:"User Not found",status:404};
        }
        let track = await trackModel.findOne({userId})
        const emptyLog = { totalCalorie: 0, protein: 0, carbs: 0, fat: 0, netcalorie: 0, steps: 0, gym: 0, calBurn: 0 }
        if(!track)return {data:emptyLog,status:200};
        const totalCalorie = Math.round(track.logs.reduce((acc, curr) => acc + curr.totalCalorie, 0) / track.logs.length)
        const totalProtein = Math.round(track.logs.reduce((acc, curr) => acc + curr.protein, 0) / track.logs.length)
        const totalCarbs = Math.round(track.logs.reduce((acc, curr) => acc + curr.carbs, 0) / track.logs.length)
        const totalFat = Math.round(track.logs.reduce((acc, curr) => acc + curr.fat, 0) / track.logs.length)
        const totalNetCalorie = Math.round(track.logs.reduce((acc, curr) => acc + curr.netcalorie, 0) / track.logs.length)
        const totalSteps = Math.round(track.logs.reduce((acc, curr) => acc + curr.steps, 0) / track.logs.length)
        const totalGym = Math.round(track.logs.reduce((acc, curr) => acc + curr.gym, 0) / track.logs.length)
        const allLogs={
            totalCalorie:totalCalorie,
            totalProtein:totalProtein,
            totalCarbs:totalCarbs,
            totalFat:totalFat,
            totalNetCalorie:totalNetCalorie,
            totalSteps:totalSteps,
            totalGym:totalGym
        }
        return {data:allLogs,status:200};
    } catch (error) {
        console.log("EXACT ERROR:", error.message) 
        throw new Error(`Failed to find and save calories: ${error.message}`)
    }
}

export const logsAll=async({userId})=>{
    try {
        const user=await userModel.findById(userId);
        if(!user){
            return {message:"User Not found",status:404};
        }
        let track = await trackModel.findOne({userId});
        if(!track)return {message:"No logs found",data:[],status:200}

        const dates=track.logs.map((logs)=>{
            const info={
                dates:new Date(logs.date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }),
                totalCalorie:logs.totalCalorie,
                totalSteps:logs.steps,
                totalGym:logs.gym
            }
            return info;
        })
        return {messages:"All Details Fetched",data:dates,status:200}
    } catch (error) {
        console.log("EXACT ERROR:", error.message) 
        throw new Error(`Failed to find and save calories: ${error.message}`)
    }
}