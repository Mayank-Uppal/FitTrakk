import { useNavigate } from "react-router";
import Button from "../Button Component/Button";
import Header from "../Heading Component/Header";
import NormalHome from "../Home Component/NormalHome";
import Input from "../Input Component/Input";
import Navbar from "../Navbar Component/Navbar";
import { useState } from "react";

const input = [{ id: 1, type: "email", placeholder: "johnDoe@gmail.com" }]
const otpInput= [
    {id:1,type:"text",placeholder:"0"},
    {id:2,type:"text",placeholder:"0"},
    {id:3,type:"text",placeholder:"0"},
    {id:4,type:"text",placeholder:"0"},
    {id:5,type:"text",placeholder:"0"},
    {id:6,type:"text",placeholder:"0"},
]
export default function Auth() {
    const navigate=useNavigate();
    const [auth,setauth]=useState<Boolean>(false);
    const [otp,setotp]=useState<Boolean>(false);

    const homebuttons=[{ id: 1, text: "Get Started", reverse: false ,handleClick:()=>setauth(true)}]
    const authbuttons = [{ id: 1, text: "Get OTP", reverse: false,handleClick:()=>{setauth(false);setotp(true)} }, { id: 2, text: "Sign up with Google", reverse: true }]
    const otpbuttons=[{id:1,text:"Login",reverse:false,handleClick:()=>navigate('/onboarding')}]
    return (
        <>
        <div className="flex flex-col bg-zinc-950 overflow-hidden h-screen">
            <Navbar />
            <div className="h-screen flex flex-col items-center justify-center text-center gap-3 ">
                {auth ? (
                    <>
                    <Header
                    Heading="Ready to see real results?"
                    subHeading="Sign up in seconds. Start logging your meals and workouts in minutes. Stick with it, and in just a few weeks you'll see the kind of progress that actually keeps you motivated."
                    headingWidth="max-w-6xl text-white"
                    subHeadingWidth="max-w-4xl"
                    />
                    <div className="w-full max-w-xl">
                        <Input key="email" input={input} />
                    </div>
                    <div className="w-full max-w-xl mt-2 flex flex-col gap-4">
                        <Button buttons={authbuttons} />
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
                        <Input key="otp" input={otpInput} />
                    </div>
                    <div className="w-full max-w-xl mt-2 flex flex-col gap-4">
                        <Button buttons={otpbuttons} />
                    </div>
                    </>
                ):
                (
                    <NormalHome homebuttons={homebuttons}/>
                )}
            </div>
        </div>
        </>
    )
}

