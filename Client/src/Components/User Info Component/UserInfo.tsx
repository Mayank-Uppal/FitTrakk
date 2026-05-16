import Navbar from "../Navbar Component/Navbar"
import Header from "../Heading Component/Header"
import { useState } from "react"
import Input from "../Input Component/Input";
import { allInputs,steps} from "./userInfoProps";
import { resolvePath, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import {type ageForm, ageSchema, goalSchema, heightSchema, type weightForm, weightSchema, type goalForm, type heightForm } from "../Schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";


export default function UserInfo() {
    const navigate=useNavigate();
    const [heightOp,setHeightOp]=useState<boolean>(true);
    const [weightOp,setWeightOp]=useState<boolean>(true);
    const [data,setData]=useState<any>({});
    const [step,setstep]=useState<number>(0);
    const hbtn = [{
        id: 1,
        text: step === 3 ? "Submit" : "Next",
        reverse: false,
    }]
    
    const handlebtn=()=>{
        if(step==0)setHeightOp(prev=>!prev)
        if(step==1)setWeightOp(prev=>!prev)
    }
    const active=step===0?heightOp:weightOp;
    const heightForm=useForm<heightForm>({resolver:zodResolver(heightSchema)})
    const weightForm=useForm<weightForm>({resolver:zodResolver(weightSchema)})
    const ageForm=useForm<ageForm>({resolver:zodResolver(ageSchema)})
    const goalForm=useForm<goalForm>({resolver:zodResolver(goalSchema)});

    console.log("clkc");

    const {mutate:heightMutate,isPending:heightPending}=useMutation({
        mutationFn:async(data:any)=>console.log("click")
    })
  return (
    <div className="flex flex-col bg-zinc-950 overflow-hidden h-screen">
        <Navbar />
        <div className="h-screen flex flex-col mt-20 items-center text-center gap-3 ">
            <div className="my-10">
             <strong className="text-lime-400 text-2xl font-body text-center ">Step - {step+1}</strong>
            </div>

            <Header
                Heading={steps[step].heading}
                subHeading={steps[step].subHeading}
                headingWidth={steps[step].headingWidth}
                subHeadingWidth={steps[step].subHeadingWidth}
            />

            {step<3 && <div className="flex flex-row gap-2  bg-lime-500 p-2 rounded-md mt-7">
                <button onClick={handlebtn} className={`cursor-pointer px-10 rounded-md py-2 ${active?"text-white bg-black":"text-black bg-none"} duration-200`}>{step===0?"ft":"kg"}</button>
                <button className="text-black px-4">|</button>
                <button onClick={handlebtn} className={`cursor-pointer px-10 py-2 duration-200 ease-in ${active?"text-black bg-none":"text-white bg-black rounded-md"}`}>{step===0?"cm":"lbs"}</button>
            </div> }
            
            <div className="flex flex-col gap-4 w-full max-w-xl">
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
            onsubmit={step==0?heightMutate:undefined }
            buttons={hbtn}
            />
            </div>

        </div>     
    </div>        
  )
}
