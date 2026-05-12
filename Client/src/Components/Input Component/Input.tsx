import type React from "react";
import { useState } from "react";

interface Prop{
  id:number,
  type:string,
  placeholder:string,
  span?:string,
  name?:string
}

interface InputProp{
  input:Prop[],
  handleChange:()=>void,
  handleKey:()=>void
}

export default function Input({input}:InputProp) {

  const [selected,setselected]=useState<string>("");
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>,index:number)=>{
      if( "span" in input[index] ){
          console.log(e.target.value);
          setselected(e.target.value)
          return;
      }
      if(input.length==1)return;
      else if(input.length>1 && e.target.value){
        if(index!=input.length)document.getElementById(`otp-${index+1}`)?.focus();
      }
  }
  const handleKey=(e:React.KeyboardEvent<HTMLInputElement>,index:number)=>{
      if(input.length==1)return;
      else if(input.length>1){
        if(e.key==="Backspace" && !e.currentTarget.value){
          const prev=document.getElementById(`otp-${index-1}`)
          if(index>0)prev.focus();
        }
      }
  }
  return (
    <form className={`mt-6 w-full flex  ${input.some(i => "span" in i) ? "flex-col" : "flex-row"}   gap-4`}>
      {input.map((i,index)=>(
        <>
        <div key={index} className={`flex flex-row w-full ${i.span?'border border-white/50 rounded-md p-4':""} `}>
          <input key={index} checked={selected===i.span} value={i.span} id={`otp-${index}`} onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>handleKey(e,index)} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e,index)} name={i.name} className={`text-center py-4 font-body text-white rounded-md border border-gray-400/50 ${i.span?'':'w-full'}`} type={i.type} placeholder={i.placeholder}  />
          {i.span && <span className='text-xl font-body w-full text-white'>{i.span}</span>}
        </div>
        
        </>
      ))}  
    </form>
  )
}
