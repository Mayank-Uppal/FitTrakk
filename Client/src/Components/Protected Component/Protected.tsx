import { Navigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export const getCookie = (name: string) => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`))
    return cookie ? cookie.split('=')[1] : null
    }

export default function Protected({children}:any) {
    const [status,setstatus]=useState<string>("pending");
    
    useEffect(()=>{
        const checkAuth=async()=>{
            const accessToken = getCookie('accessToken') ;
            const refeshToken = getCookie('refreshToken');
        
            if(accessToken){
                setstatus("authorized");
            }
            else if(!accessToken && refeshToken){
                try {
                    const res=await axios.get('http://localhost:5001/refresh', { headers: { Authorization: `Bearer ${refeshToken}` } })
                    document.cookie=`accessToken=${res.data.accessToken};`;
                    setstatus("authorized");
                } catch (error) {
                    console.log(error);
                    setstatus("unauthorized");
                }
            }
            else {
                setstatus("unauthorized");
            }
        }
        checkAuth();
    },[])   
    return(
        <>
        {status==="pending" && <div className="w-full h-screen bg-zinc-950 flex items-center justify-center text-white font-body text-xl">Checking authentication...</div>}
        {status==="unauthorized" && <Navigate to={"/auth/login"}/>}
        {status==="authorized" && children}
        </>
    )
}
