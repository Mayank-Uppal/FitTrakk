import Card from "./Card";
import Meal from "./Meal";
import Input from "../Input Component/Input";
import Button from "../Button Component/Button";
import Table from "./Table";
import { formatted,allInputs,OptionButtons, mealType,icons} from "./Props";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { mealSchema,stepsSchema,gymSchema } from "../Schemas/schema";
import  type { MealForm,StepForm,GymForm } from "../Schemas/schema";
import  { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { getCookie } from "../Protected Component/Protected";
import { useNavigate } from "react-router";


export default function NormalTrack() {
  const navigate=useNavigate();
  const [inputcount,setinputcount]=useState<number>(-1);
  const [mealData,setmealData]=useState<any[]>([])
  const mealForm=useForm<MealForm>({resolver: zodResolver(mealSchema) })
  const [cardData,setCardData]=useState<any>([]);
  const stepForm=useForm<StepForm>({resolver: zodResolver(stepsSchema) })
  const gymForm=useForm<GymForm>({resolver:zodResolver(gymSchema)})
  const forms=[mealForm,stepForm,gymForm];
  const optionButtonClick=OptionButtons.map((btn,i)=>({
    ...btn,
    handleClick:()=>handleOptionClick(i)
  }))
  const handleOptionClick=(index:number)=>{
    if(inputcount == index){
      setinputcount(-1);
    }
    else{
      setinputcount(index)
    }
  }
  const {data}=useQuery({
    queryKey:[],
    queryFn:async()=>{
      const res=await axios.get(`http://localhost:5001/track?date=${new Date().toDateString()}`,{headers:{
          Authorization:`Bearer ${getCookie("accessToken")}`
        }})
      setmealData(res.data.data.mealData)
      setCardData(res.data.data.logData);
      return res.data;
    }
  })

  const props=[{icons:icons[0],title:"Calories",data:cardData?.totalCalorie ?? 0},{icons:icons[1],title:"Steps",data:cardData?.steps ?? 0},
  {icons:icons[2],title:"Net Calories",data:cardData?.netcalorie ?? 0},{icons:icons[3],title:"Protein Intake (in g)",data:cardData?.protein ?? 0},
  {icons:icons[4],title:"Gym Time (in mins)",data:cardData?.gym ?? 0}]

const {mutate:mealMutate,isPending:mealPending,isError:mealError}=useMutation({
  mutationFn:async(data:any)=>{
    const res=await axios.post('http://localhost:5001/track/meal',{qty:data.qty,meal:data.meal},{headers:{
      Authorization:`Bearer ${getCookie("accessToken")}`
    }})
    return res.data;
  },
  onSuccess:(data)=>{
    mealForm.reset();
    setmealData(prev => [...(prev || []), data.data.meal])
    setCardData(data.data)
  }
})

const {mutate:stepMutate,isPending:stepPending,isError:stepError}=useMutation({
  mutationFn:async(data:any)=>{
    const res=await axios.post('http://localhost:5001/track/steps',{steps:data.steps,calBurn:data.calBurn},{headers:{
      Authorization:`Bearer ${getCookie("accessToken")}`
    }})
    return res.data;
  },
  onSuccess:(data)=>{
    stepForm.reset()
    setCardData(data.data)
  }
})

const {mutate:gymMutate,isPending:gymPending,isError:gymError}=useMutation({
  mutationFn:async(data:any)=>{
    const res=await axios.post('http://localhost:5001/track/gym',{time:data.time,calBurn:data.gymBurn},{headers:{
      Authorization:`Bearer ${getCookie("accessToken")}`
    }})
    return res.data;
  },
  onSuccess:(data)=>{
    gymForm.reset();
    setCardData(data.data)
  }
})

const allButtons=[
      [{id:1,text:mealPending?"Adding Meal and Calculation calories...":"Add Meal",reverse:true}],
      [{id:1,text:stepPending?"Adding Steps...":"Add",reverse:true}],
      [{id:1,text:gymPending?"Adding Workout Details...":"Add",reverse:true}
      ],
  ]
  return (
    <div className="flex flex-col  bg-slate-950 min-h-screen ">
        <div className="flex flex-col gap-2 py-7 border-white/8">
            <h1 className="text-2xl font-body text-white/70 w-fit px-10 rounded-md">{formatted}</h1>
            <div className="mt-7 flex flex-row gap-10 px-10 ">
              <Card cardOptions={props}/>
            </div>
            <div className="flex flex-row gap-6 mx-10 mt-8">
              <Button buttons={optionButtonClick}/>
            </div>
        </div>
      
      <div className={`${inputcount==0?'flex flex-row justify-between':null} w-full `}>
        <div className={`${inputcount==0?'w-1/3':'null'} mx-10 gap-4 flex flex-col mt-10`}>
            {inputcount==0 && <Meal/>}
            {inputcount>=0 && <Input 
              input={allInputs[inputcount]} 
              register={forms[inputcount].register as any} 
              errors={forms[inputcount].formState.errors as any}
              handleSubmit={forms[inputcount].handleSubmit as any}
              onsubmit={inputcount===0?mealMutate:inputcount===1?stepMutate:inputcount===2?gymMutate:undefined}
              buttons={allButtons[inputcount]}
            />}
        </div>

      {inputcount<=0 && mealData.length>0?(
         <div className={`${inputcount<0?'w-full px-10 text-center mt-0 ':'w-2/3 mt-10 mr-10'} `}>
          <Table MealData={mealData}/>
        </div>
      ):null}   
      </div>

      <div className="mt-15 max-w-5xl mx-auto ">
        <Button buttons={[{id:1,text:"Done",handleClick:()=>navigate('/home')}]}/>
      </div>
    </div>
  )
}
