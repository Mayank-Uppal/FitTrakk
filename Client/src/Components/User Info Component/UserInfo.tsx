import Navbar from "../Navbar Component/Navbar"
import Header from "../Heading Component/Header"
import { useState } from "react"
import Input from "../Input Component/Input";
import Button from "../Button Component/Button";
import { steps , ht,wt,age } from "./userInfoProps";

export default function UserInfo() {
    const [heightOp,setHeightOp]=useState<boolean>(true);
    const [weightOp,setWeightOp]=useState<boolean>(true);
    const [step,setstep]=useState<number>(1);
    const hbtn=[{id:1,text:"Next",reverse:false,handleClick:()=>setstep(prev=>prev+1)}]
    
    const handlebtn=(step:number)=>{
        if(step==1)setHeightOp(prev=>!prev)
        if(step==2)setWeightOp(prev=>!prev)
    }
     const getInput=()=>{
        if(step===1 && heightOp)return [ht[0]];
        else if(step===1 && !heightOp)return [ht[1]];
        else if(step===2 && weightOp )return [wt[0]];
        else if(step===2 && !weightOp )return [wt[1]];
        else if(step===3)return age;
    }
    const active=step===1?heightOp:weightOp;

  return (
    <div className="flex flex-col bg-zinc-950 overflow-hidden h-screen">
        <Navbar />
        <div className="h-screen flex flex-col mt-30 items-center text-center gap-3 ">
            <div className="my-10">
             <strong className="text-lime-400 text-2xl font-body text-center ">Step - {step}</strong>
            </div>

            <Header
            Heading={steps[step-1].heading}
            subHeading={steps[step-1].subHeading}
            headingWidth={steps[step-1].headingWidth}
            subHeadingWidth={steps[step-1].subHeadingWidth}
            />

            {step!=3 && <div className="flex flex-row gap-2  bg-lime-500 p-2 rounded-md mt-7">
                <button onClick={()=>handlebtn(step)} className={`cursor-pointer px-10 rounded-md py-2 ${active?"text-white bg-black":"text-black bg-none"} duration-200`}>{step===1?"ft":"kg"}</button>
                <button className="text-black px-4">|</button>
                <button onClick={()=>handlebtn(step)} className={`cursor-pointer px-10 py-2 duration-200 ease-in ${active?"text-black bg-none":"text-white bg-black rounded-md"}`}>{step===1?"cm":"lbs"}</button>
            </div> }
            

            <div className="flex flex-row gap-4 w-full max-w-xl">
                <Input input={getInput()}/>
            </div>

            <div className="w-full max-w-xl mt-6 flex flex-col gap-4">
                <Button buttons={hbtn} />
            </div>

        </div>     
    </div>        
  )
}
