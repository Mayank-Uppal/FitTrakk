import Card from "./Card";
import Meal from "./Meal Component/Meal";
import Input from "../Input Component/Input";
import Button from "../Button Component/Button";
import Table from "./MealTable.tsx/Table";
import { formatted,allInputs,allButtons,OptionButtons} from "./Props";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { mealSchema,stepsSchema,gymSchema } from "../Schemas/schema";
import  type { MealForm,StepForm,GymForm } from "../Schemas/schema";
import  { zodResolver } from "@hookform/resolvers/zod";
import Header from "../Heading Component/Header";

export default function NormalTrack() {
  const [inputcount,setinputcount]=useState<number>(-1);
  const [mealData,setmealData]=useState<any[]>([])
  const mealForm=useForm<MealForm>({resolver: zodResolver(mealSchema) })
  const stepForm=useForm<StepForm>({resolver: zodResolver(stepsSchema) })
  const gymForm=useForm<GymForm>({resolver:zodResolver(gymSchema)})
  const forms=[mealForm,stepForm,gymForm];

  const optionButtonClick=OptionButtons.map((btn,i)=>({
    ...btn,
    handleClick:()=>handleOptionClick(i)
  }))
  /* const allButtonsClick=allButtons.map((btngrp,index)=>(
    btngrp.map((btn,i)=>({
      ...btn,
      handleClick:()=>handleAdd(index,i)
    }))
  )) */
  const handleOptionClick=(index:number)=>{
    if(inputcount == index){
      setinputcount(-1);
    }
    else{
      setinputcount(index)
    }
  }
  const handledata=(data:any)=>{
    console.log(data);
    setmealData((prev)=>[
      ...prev,
      {
      meal:"Rajma",
      time:"Breakfast",
      qty:"100 g",
      cal:"200 kcal",
      protein:"100 g",
      carbs:"200 g",
      fat:"45 g"
      }
    ]);
  }

  return (
    <div className="flex flex-col  bg-zinc-950 h-screen ">
        <div className="flex flex-col gap-2 py-7 border-white/8">
            <h1 className="text-2xl font-body text-white/70 w-fit px-10 rounded-md">{formatted}</h1>
            <div className="mt-7 flex flex-row gap-10 px-10 ">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
            <div className="flex flex-row gap-6 mx-10 mt-8">
              <Button buttons={optionButtonClick}/>
            </div>
        </div>


      {inputcount<0 && <div className="flex flex-col gap-2 text-center justify-center items-center mt-40">
        <Header
            Heading="Your logs will appear here"
            subHeading="Click 'Add Meal', 'Add Steps', or 'Add Gym Workout' above to start tracking. Every entry you make will show up right here."
            headingWidth="max-w-6xl text-white/40"
            subHeadingWidth="max-w-4xl text-white/30"
        />
      </div>}
      

      <div className="flex flex-row justify-between ">
        <div className={`${inputcount==0?'w-1/3':"w-full"} mx-10 gap-4 flex flex-col mt-10`}>
          {inputcount==0 && <Meal/>}
            {inputcount>=0 && <Input 
          input={allInputs[inputcount]} 
          register={forms[inputcount].register as any} 
          errors={forms[inputcount].formState.errors as any}
          handleSubmit={forms[inputcount].handleSubmit as any}
          onsubmit={handledata}
          buttons={allButtons[inputcount]}
          />}
        </div>

      {inputcount==0?(
         <div className="w-2/3 mt-10 mr-10 max-w-5xl">
          <Table MealData={mealData}/>
        </div>
      ):null}   
      </div>
    </div>
  )
}
