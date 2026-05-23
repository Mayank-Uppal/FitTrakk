import Navbar from "../Navbar Component/Navbar"
import Header from "../Heading Component/Header"
import { useState } from "react"
import Input from "../Input Component/Input";
import { allInputs,steps} from "./userInfoProps";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import {type ageForm, ageSchema, goalSchema, heightSchema, type weightForm, weightSchema, type goalForm, type heightForm } from "../Schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'
import RedirectingAI from "../Redirecting Component/RedirectingAI";
import { getCookie } from "../Protected Component/Protected";


export default function UserInfo() {
    const navigate=useNavigate();
    const heightOp=true;
    const weightOp=true;
    const [userData,setUserData]=useState<any>({});
    const [step,setstep]=useState<number>(0);

    const active=step===0?heightOp:weightOp;
    // @ts-ignore
    const heightForm=useForm<heightForm>({resolver:zodResolver(heightSchema)})
    // @ts-ignore
    const weightForm=useForm<weightForm>({resolver:zodResolver(weightSchema)})
    // @ts-ignore
    const ageForm=useForm<ageForm>({resolver:zodResolver(ageSchema)})
    const goalForm=useForm<goalForm>({resolver:zodResolver(goalSchema)});

    const accessToken = getCookie('accessToken') 

    const {mutate:heightMutate}=useMutation({
        mutationFn:async(data:any)=>{
            setUserData((prev:any)=>({...prev,height:data.height}))
            setstep(prev=>prev+1);
        }
    })
    const {mutate:weightMutate}=useMutation({
        mutationFn:async(data:any)=>{
            setUserData((prev:any)=>({...prev,weight:data.weight}))
            setstep(prev=>prev+1);
        }
    })
    const {mutate:ageMutate}=useMutation({
        mutationFn:async(data:any)=>{
            setUserData((prev:any)=>({...prev,age:data.age}))
            setstep(prev=>prev+1);
        }
    })
    const {mutate:goalMutate,isPending:goalPending}=useMutation({
        mutationFn:async(data:any)=>{
            console.log({...userData})
            await axios.post('http://localhost:5001/objectives', 
            { ...userData, goal: data.goal },  
            { headers: { Authorization: `Bearer ${accessToken}` } }  
            )
        },
        onSuccess:()=>{
            navigate('/home');
        },
        onError:(error:any)=>
        {
            console.log(error)
        }
    })

    const hbtn = [{
        id: 1,
        text: step === 3 ?goalPending?"Analyzing Goals and Preparing Data....":"Submit" : "Next",
        reverse: false,
    }]
  return (
    <>
    {goalPending?<RedirectingAI/>:(
        <div className="flex flex-col bg-slate-950 overflow-hidden h-screen">
        <Navbar />
        <div className="h-screen flex flex-col mt-20 items-center text-center gap-3 ">

            <div className="my-10">
                <p className="text-white/40 text-md">Step - {step+1} of 4</p>
            </div>

            <Header
                Heading={steps[step].heading}
                subHeading={steps[step].subHeading}
                headingWidth={steps[step].headingWidth}
                subHeadingWidth={steps[step].subHeadingWidth}
            />
            
            <div className="flex flex-col gap-4 w-full max-w-xl mt-12">
            <Input  
            input={
                step===0 && active ? [allInputs[0][0]] :
                step===0 && !active ? [allInputs[0][1]] :
                step===1 && active ? [allInputs[1][0]] :
                step===1 && !active ? [allInputs[1][1]] :
                step===2 ? allInputs[2] :
                allInputs[3]
            }
            register={
                step===0?heightForm.register:
                step===1?weightForm.register:
                step===2?ageForm.register:
                step===3?goalForm.register:
                undefined
            }
            errors={
                step===0?heightForm.formState.errors:
                step===1?weightForm.formState.errors:
                step===2?ageForm.formState.errors:
                step===3?goalForm.formState.errors:
                undefined}
            handleSubmit={
                step==0?heightForm.handleSubmit:
                step==1?weightForm.handleSubmit:
                step==2?ageForm.handleSubmit:
                step==3?goalForm.handleSubmit:
                undefined}
            onsubmit={step==0?heightMutate:step==1?weightMutate:step==2?ageMutate:step==3?goalMutate:undefined}
            buttons={hbtn}
            />
            </div>
        </div>     
    </div>      
    )}
    
    </>  
  )
}
