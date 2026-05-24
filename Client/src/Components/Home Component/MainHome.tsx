import { useNavigate } from "react-router"
import Button from "../Button Component/Button"
import HomeCard from "../HomeCard Components/HomeCard";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { getCookie } from "../Protected Component/Protected";
import { useState } from "react";
import { titles,icons } from "./props";
import Dashboard from "../Loading Component/Dashboard";
import SideBarResponsive from "../Responsive SideBar Component/sideBarResponsive";


export default function MainHome() {

    const navigate=useNavigate();
    const [goal,setgoal]=useState<any>([]);
    const [actual,setactual]=useState<any>({});

    const {isPending}=useQuery({
        queryKey:['dashboard'],
        queryFn:async()=>{
            const accessToken=getCookie('accessToken');
            const response=await axios.get('https://fittrakk.onrender.com/log/goalData',{headers:{
                Authorization:`Bearer ${accessToken}`
            }});
            const actualResponse=await axios.get('https://fittrakk.onrender.com/track/dashboard',{headers:{
                Authorization:`Bearer ${accessToken}`
            }});
            setactual(actualResponse.data.data);
            setgoal([response.data.data]);
            return response.data;
        },
        staleTime: 0,  
        refetchOnMount: true ,
        gcTime:0
    })
    const goalValues=goal.length>0?Object.values(goal[0]):[];
    const actualValues=[actual.totalCalorie??0,actual.totalSteps??0,actual.totalNetCalorie??0,actual.totalCarbs??0,actual.totalProtein??0,actual.totalFat??0];
    const button=[{id:1,text:"Add log",reverse:false,handleClick:()=>navigate('/log')}]
  return (
    <>
    {isPending?<Dashboard/>:(
        <div className="flex flex-col bg-slate-950  min-h-screen w-full overflow-hidden">

            <div className=" lg:mx-15 mt-7 text-center flex flex-row items-center lg:flex-none  w-full overflow-hidden">
                <div className=" block lg:hidden ml-4 w-fit overflow-hidden">
                    <SideBarResponsive/>
                </div>
                <p className="lg:text-2xl ml-16 mt-4 lg:ml-0 text-sm text-white/85 font-body "> Hey, here's your progress 💪</p>
            </div>
            <div className="lg:grid lg:grid-cols-3 flex flex-col gap-3 mt-7 mx-15 place-items-center">
                {[...Array(6)].map((_,index)=>(
                        <HomeCard icons={icons[index]} title={titles[index]} goalNum={goalValues[index]} actualNum={actualValues[index]}/>
                ))}
            </div>
            
            <div className=" lg:mx-15 mx-4 mt-5 text-center">
                <p className="lg:text-2xl text-lg text-white/85 font-body "> Small steps daily, big results eventually.</p>
            </div>   
            <div className="my-7 max-w-sm text-center mx-auto ">  
                <Button buttons={button}/>
            </div>     
    </div>
    )}
    </>
  )
}
