import { useState } from "react"
import { Link } from "react-router";

export default function SideBarResponsive() {
    const [click,setClick]=useState<Boolean>(false);
    const dashboard=[{text:"Dashboard"},{text:"All Logs"}]
  return (
    <>
    <div className={`absolute top-2 bg-slate-950 ${click?"w-full":"w-fit"}`}>
        <svg onClick={()=>setClick(!click)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
        <g fill="#20c997" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path></g></g>
        </svg>

        {click?(
            <>
            <ul className="space-y-1 mx-10">
            {dashboard.map((d,index)=>(
                <li key={index}>
                <Link to={d.text==="Dashboard"?"/home":d.text==="All Logs"?"/alllogs":'/'} className="block font-body text-white/60 hover:bg-green-400/30 hover:scale-102 duration-300 hover:p-4 rounded-lg my-7  px-4 py-4 text-sm font-medium ">
                {d.text}
                </Link>
            </li>
            ))}
        </ul>
            </>

        ):null}
    </div>
    
    </>
  )
}
