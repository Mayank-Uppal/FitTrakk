import {z} from 'zod';

export const mealSchema=z.object({
    qty:z.string().min(1,'Value should be greater than 0 g').max(4000,'Value should be less than 4000 g '),
    mealName:z.string().min(1,"Meal Name Required")
})

export const stepsSchema=z.object({
    steps:z.string().min(1,"Time (in minutes) required"),
    calBurn:z.string().min(1,"Body part trained required")
})
export const gymSchema=z.object({
    time:z.string().min(1,"Time (in minutes) required"),
    workout:z.string().min(1,"Body part trained required")
})

export const emailSchema=z.object({
    email:z.string().email('Enter valid Email Addrress')
})

export const heightSchema=z.object({
    height:z.coerce.number().min(30,'Height should be greater than 30 cm').max(250,'Height should be less than 250 cm')
})
export const weightSchema=z.object({
    weight:z.coerce.number().min(30,'Weight should be greater than 30 kg')
})
export const ageSchema=z.object({
    age:z.coerce.number().min(16,'age should be greater than 16')
})

export const goalSchema=z.object({
    goal:z.string().min(1,"required")
})

export const otpSchema=z.object({
    otp1:z.string().length(1,"Required"),
    otp2:z.string().length(1,"Required"),
    otp3:z.string().length(1,"Required"),
    otp4:z.string().length(1,"Required"),
    otp5:z.string().length(1,"Required"),
    otp6:z.string().length(1,"Required"),
})

export type MealForm=z.infer<typeof mealSchema>
export type StepForm=z.infer<typeof stepsSchema>
export type GymForm=z.infer<typeof gymSchema>
export type emailForm=z.infer<typeof emailSchema>
export type otpForm=z.infer<typeof otpSchema>
export type heightForm=z.infer<typeof heightSchema>
export type weightForm=z.infer<typeof weightSchema>
export type ageForm=z.infer<typeof ageSchema>
export type goalForm=z.infer<typeof goalSchema>