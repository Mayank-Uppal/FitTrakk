import type React from "react";

interface Prop{
  id:number,
  type:string,
  placeholder:string
}

interface InputProp{
  input:Prop[]
}

export default function Input({input}:InputProp) {

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>,index:number)=>{
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
    <form className="mt-6 w-full flex flex-row gap-4">
      {input.map((i,index)=>(
        <input key={index} id={`otp-${index}`} onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>handleKey(e,index)} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e,index)} className="text-center py-4 font-body text-white rounded-md border border-gray-400/50 w-full " type={i.type} placeholder={i.placeholder}  />
      ))}  
    </form>
  )
}
