import { useNavigate } from "react-router";
import Header from "../Heading Component/Header";
import NormalHome from "../Home Component/NormalHome";
import Input from "../Input Component/Input";
import Navbar from "../Navbar Component/Navbar";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { emailSchema, otpSchema, type emailForm, type otpForm } from "../Schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpInput,input } from "./props";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
import Redirecting from "../Redirecting Component/Redirecting";
import { getCookie } from "../Protected Component/Protected";

export default function Auth() {
    const navigate=useNavigate();
    const [auth,setauth]=useState<Boolean>(false);
    const [otp,setotp]=useState<Boolean>(false);
    const emailForm=useForm<emailForm>({resolver:zodResolver(emailSchema)})
    const otpForm=useForm<otpForm>({resolver:zodResolver(otpSchema)})
    const [email,setEmail]=useState<string>("");
    const homebuttons=[{ id: 1, text: "Get Started", reverse: false ,handleClick:()=>setauth(true)}]
    const [redirect,setRedirect]=useState<Boolean>(false);

    useEffect(()=>{
        const islogin=async()=>{
            const accessToken = getCookie('accessToken') ;
            const refeshToken = getCookie('refreshToken');
        
            if(accessToken || refeshToken){
                navigate("/home");
            }
        }
        islogin();
    },[getCookie('accessToken'),getCookie('refreshToken')])

    const {mutate:emailMutate,isPending:emailPending}=useMutation({
        mutationFn:async(data:emailForm)=>{
            await axios.post('http://localhost:5001/auth/login',{email:data.email});
            setEmail(data.email);
        },
        onSuccess:()=>{
            setauth(false);
            setotp(true);
        },
        onError:(error)=>{
            console.log("error",error);
        }
    })
    const authbuttons = [{ id: 1, text: emailPending ? "Sending OTP..." : "Get OTP", reverse: false}, { id: 2, text: "Sign up with Google", reverse: true }]

    const {mutate:otpMutate,isPending:otpPending}=useMutation({
        mutationFn:async(data:any)=>{
            const otp=`${data.otp1}${data.otp2}${data.otp3}${data.otp4}${data.otp5}${data.otp6}`
            const res=await axios.post("http://localhost:5001/auth/otp-validate",{email:email,otp:otp});
            return res.data;
        },
        onSuccess:async(data)=>{
            setRedirect(true)
            document.cookie = `accessToken=${data.accessToken}; path=/; SameSite=Lax; max-age=3600;`
            document.cookie = `refreshToken=${data.refreshToken}; path=/; SameSite=Lax; max-age=604800;`

            const res = await axios.get("http://localhost:5001/user", {
                headers: { Authorization: `Bearer ${data.accessToken}` }
            })
            
            if(res.data.data === true) {
                navigate('/home') // already onboarded
            } else {
                navigate('/onboarding')
            }
        },
        onError:(error)=>{
            console.log("error",error);
        }
    })
    const otpbuttons=[{id:1,text: otpPending ? "Validating OTP...":"Login",reverse:false}]
    return (
        <>
        {redirect?<Redirecting/>:(
            <div className="flex flex-col bg-slate-950 overflow-hidden h-screen">
            <Navbar />
            <div className="h-screen flex flex-col items-center justify-center text-center gap-3 px-4">
                {auth ? (
                    <>
                    <Header
                    Heading="Ready to see real results?"
                    subHeading="Sign up in seconds. Start logging your meals and workouts in minutes. Stick with it, and in just a few weeks you'll see the kind of progress that actually keeps you motivated."
                    headingWidth="max-w-6xl text-white"
                    subHeadingWidth="max-w-4xl"
                    />
                    <div className="md:w-full max-w-xl">
                        <Input key="email" input={input} 
                        register={emailForm.register} 
                        errors={emailForm.formState.errors}  
                        handleSubmit={emailForm.handleSubmit}
                        onsubmit={() => emailForm.handleSubmit((data) => emailMutate(data))()}
                        buttons={authbuttons}
                        />
                    </div>
                    </>
                ) : 
                otp ?(
                    <>
                    <Header
                    Heading="Check your inbox"
                    subHeading="We've sent a 6-digit code to your email. Enter it below to verify your identity and get started."
                    subHeadingWidth="max-w-2xl"
                    headingWidth="max-w-6xl text-white"
                    />
                    <div className="w-full max-w-xl text-center">
                        <Input key="otp" input={otpInput} 
                        register={otpForm.register} 
                        errors={otpForm.formState.errors}
                        handleSubmit={otpForm.handleSubmit}
                        onsubmit={() => otpForm.handleSubmit((data) => otpMutate(data))()}
                        buttons={otpbuttons}
                        />
                    </div>
                    </>
                ):
                (
                    <NormalHome homebuttons={homebuttons}/>
                )}
            </div>
        </div>
        )}
        </>
    )
}

