import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import axios from 'axios'
import { getCookie } from '../Protected Component/Protected'
import { useNavigate,useSearchParams } from 'react-router'
import Button from '../Button Component/Button'
import { icons } from '../Track Components/Props'
import Table from '../Track Components/Table'
import NewCard from './newCard'
import Summary from '../Loading Component/Summary'

export default function AllLog() {
    const navigate=useNavigate();
    const [dateParam]=useSearchParams();
    const date=dateParam.get("date");
    const [logData,setLogDate]=useState<any>({});
    const [mealData,setMealData]=useState<any>([]);

    const {isPending}=useQuery({
        queryKey:[],
        queryFn:async()=>{
            const res=await axios.get(`https://fittrakk.onrender.com/track?date=${date}`,{headers:{
            Authorization:`Bearer ${getCookie("accessToken")}`
            }}) 
            setLogDate(res.data.data.logData);
            setMealData(res.data.data.mealData);
        }
    })
     const props=[{icons:icons[0],title:"Calories",data:logData?.totalCalorie  ?? 0},{icons:icons[1],title:"Steps",data:logData?.steps ?? 0},
      {icons:icons[2],title:"Net Calories",data:logData?.netcalorie ?? 0},{icons:icons[3],title:"Protein Intake (in g)",data:logData?.protein ?? 0},
      {icons:icons[4],title:"Carbs (in g)",data:logData?.carbs ?? 0},
    {icons:icons[4],title:"Gym Time (in mins)",data:logData?.gym ?? 0}]
    
  return (
    <>
    {isPending?<Summary/>:(
         <div className='min-h-screen bg-slate-950'>
        <div className='flex flex-row justify-between items-center'>
            <p className='text-white/60 font-body text-2xl mx-10 py-10 '>Log Summary - {date}</p>
        </div>

            <div className='grid grid-cols-3 gap-4 mx-10'>
                {props.map((p,index)=>(
                    <NewCard key={index} {...p}/>
                ))}
            </div>
            
            <p className='text-white/60 font-body text-2xl mx-10 mt-10'>All Meals</p>
            <div className="w-full px-10  mt-9 ">
                <Table MealData={mealData}/>
            </div>
            
            <div className='mt-30 max-w-xl mx-auto'>
                <Button buttons={[{id:1,text:"Back to all logs",reverse:false,handleClick:()=>navigate(-1)}]}/>
            </div>

    </div>
    )}
    </>
  )
}
