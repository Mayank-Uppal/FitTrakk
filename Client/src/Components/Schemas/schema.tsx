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

export const otpSchema=z.object({
    otp:z.string().min(1,"enter valid otp").max(1,"max 1 input is allowed")
})

export type MealForm=z.infer<typeof mealSchema>
export type StepForm=z.infer<typeof stepsSchema>
export type GymForm=z.infer<typeof gymSchema>
export type emailForm=z.infer<typeof emailSchema>
export type otpForm=z.infer<typeof otpSchema>