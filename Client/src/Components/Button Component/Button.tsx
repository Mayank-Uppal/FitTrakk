
export interface buttonProp{
  id:number,
  text:string,
  reverse?:boolean
  handleClick?:()=>void
}
export interface Buttons{
  buttons:buttonProp[]
}
export default function Button({buttons}:Buttons) {
  return (
    <>
    {buttons.map((b)=>(
      <button type="submit" onClick={b.handleClick} key={b.id} className="group w-full relative inline-block overflow-hidden border border-green-400/50 px-8 py-4 rounded-md" >
      <span className={`absolute inset-y-0 left-0 transition-all duration-300 bg-green-500 ${b.reverse ? "w-0 group-hover:w-full hover:text-black" : "w-full group-hover:w-0 text-white"}`}></span>
        <span className={`relative text-md  ${b.reverse?"text-white group-hover:text-black":"text-black group-hover:text-white"} font-body font-extrabold transition-colors`}>
            {b.text}
        </span>
    </button>
    ))}
    </>
  )
}
