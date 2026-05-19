import Card from "./Card";
import Sidebar from "../SideBar Component/Sidebar";
import {  useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "../Protected Component/Protected";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Log() {
    const [logsData,allLogsData]=useState<any>([]);
    const navigate=useNavigate()
    const handleClick=async(index:number)=>{
        navigate(`/alllogs/details?date=${logsData[index].dates}`)
    }
    useQuery({
        queryKey:[],
        queryFn:async()=>{
            const res=await axios.get("http://localhost:5001/track/all-logs",{headers:{
                Authorization:`Bearer ${getCookie("accessToken")}`
            }})
            allLogsData(res.data.data)
        }
    })
  return (
    <>
    <div className="flex flex-row w-full">
          <div className=" fixed w-1/5">
            <Sidebar/>
          </div>
          <div className="w-full ml-85 min-h-screen bg-slate-950 px-10 py-10">
            <Card allLog={logsData}  handleClick={handleClick}/>
          </div>      
    </div>
    </>
  )
}
