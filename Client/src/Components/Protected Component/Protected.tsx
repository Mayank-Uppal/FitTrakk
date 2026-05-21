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
            try {
                await axios.get('http://localhost:5001/user', {
                    headers: { Authorization: `Bearer ${accessToken}` }
                })
                setstatus("authorized")
            } catch (error) {
                // ✅ user deleted or invalid token → clear cookies
                document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                setstatus("unauthorized")
            }
        }
            else if(!accessToken && refeshToken){
                try {
                    const res=await axios.post('http://localhost:5001/auth/refresh',{refeshToken:refeshToken},{ headers: { Authorization: `Bearer ${refeshToken}` } })
                    document.cookie = `accessToken=${res.data.accessToken}; path=/; SameSite=Lax; max-age=3600;`
                    console.log(res.data)
                    setstatus("authorized");
                } catch (error) {
                    console.log("ERROR HIT - clearing cookies") // ✅ add this
                    console.log(error.response?.status) // what status?
                    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                    document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                    setstatus("unauthorized");
                }
            }
            else {
                setstatus("unauthorized");
            }
        }
        checkAuth();
    },[])   

    console.log("protected",status)
    return(
        <>
        {status==="pending" && <div className="w-full h-screen bg-slate-950 flex items-center justify-center text-white font-body text-xl">Checking authentication...</div>}
        {status==="unauthorized" && <Navigate to={"/"}/>}
        {status==="authorized" && children}
        </>
    )
}
