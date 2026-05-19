import Header from "../Heading Component/Header";
import Button from "../Button Component/Button";
import { useEffect } from "react";
import { getCookie } from "../Protected Component/Protected";
import { useNavigate } from "react-router";
import axios from "axios";
import type { buttonProp } from "../Button Component/Button";

export default function NormalHome({homebuttons}:{homebuttons:buttonProp[]}) {
  const navigate=useNavigate();
    useEffect(()=>{
            const islogin=async()=>{
                const accessToken = getCookie('accessToken') ;
                const refreshToken = getCookie('refreshToken');
            
                if(accessToken){
                    navigate("/home");
                }
                else if(!accessToken && refreshToken){
                    try {
                        const res=await axios.post('https://fittrakk.onrender.com/auth/refresh', {refreshToken:refreshToken},{ headers: { Authorization: `Bearer ${refreshToken}` } })
                        document.cookie = `accessToken=${res.data.accessToken}; path=/; SameSite=Lax; max-age=3600;`
                        navigate('/home')
                    } catch (error) {
                        console.log(error)
                    }
                }
                else{
                    navigate('/')
                }
            }
            islogin();
        },[])

        console.log("refresh",getCookie('refreshToken'));
  return (
    <>
    <Header
        Heading="Your Fitness. Your Rules. Your Results."
        subHeading="Stop guessing what you eat and burn. FitTrakk gives you 
        a crystal clear picture of every meal, every rep, and every 
        step — so you can make smarter decisions and actually see progress."
        headingWidth="max-w-6xl text-white"
        subHeadingWidth="max-w-5xl"
    />
        <div className="w-full max-w-xl mt-4 flex flex-col gap-4">
            <Button buttons={homebuttons} />
        </div>
    </>
  )
}
