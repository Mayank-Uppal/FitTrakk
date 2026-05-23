import type React from "react";
import { useState } from "react";
import type { UseFormRegister, FieldErrors, UseFormHandleSubmit } from "react-hook-form"
import Button from "../Button Component/Button";

interface Prop{
  id?:number,
  type?:string,
  placeholder?:string,
  span?:string,
  name?:string
}

interface InputProp{
  input:Prop[],
  onsubmit?:(data:any)=>void,
  register?: UseFormRegister<any>
  errors?: FieldErrors
  handleSubmit?: UseFormHandleSubmit<any>
  buttons?:any[]
}

export default function Input({input,register,errors,handleSubmit,onsubmit,buttons}:InputProp) {
  const [selected,setselected]=useState<string>("");
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>,index:number)=>{
      if( "span" in input[index] ){
          console.log(e.target.value);
          setselected(e.target.value)
          return;
      }
      if(input.length==1)return;
       if(!input[index].name?.includes("otp"))return;
      else if(input.length>1 && e.target.value){
        if(index!=input.length)document.getElementById(`otp-${index+1}`)?.focus();
      }
  }
  const handleKey=(e:React.KeyboardEvent<HTMLInputElement>,index:number)=>{
      if(input.length==1)return;
      if(!input[index].name?.includes("otp"))return;
      else if(input.length>1){
        if(e.key==="Backspace" && !e.currentTarget.value){
          const prev=document.getElementById(`otp-${index-1}`)
          if(index>0 && prev)prev.focus();
        }
      }
  }
  return (
    <form onSubmit={handleSubmit ? handleSubmit(onsubmit!) : undefined} className="w-full flex flex-col mt-4 gap-4">
      <div className={`flex ${input[0]?.name?.includes('otp') ? 'flex-row' : 'flex-col'} gap-4`}>
      {input.map((i,index)=>(
        <>
        <div className={`flex flex-col ${i.name=='goal' ? 'border border-white/40 p-4' : ''}`}>
          <input key={i.name} value={i.span} {...(register ? register(i.name as string) : {})} checked={selected===i.span} id={`otp-${index}`} onKeyDown={i.name==='otp'?((e:React.KeyboardEvent<HTMLInputElement>)=>handleKey(e,index)):undefined} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e,index)} name={i.name} className={`text-center text-sm md:text-md md:py-4 py-3 font-body text-white rounded-md border border-gray-400/50 ${i.span?'':'w-full'}`} type={i.type} placeholder={i.placeholder}  />
          {i.span && <span className='md:text-xl text-md font-body w-full text-white'>{i.span}</span>}
          {i.name && errors?.[i.name] && (
            <span className="text-red-400 text-center text-sm mt-1">
              {errors?.[i.name]?.message as string}
            </span>
          )}
        </div>
        </>
      ))}  
      </div>
      <Button buttons={buttons??[]}/>
    </form>
  )
}
