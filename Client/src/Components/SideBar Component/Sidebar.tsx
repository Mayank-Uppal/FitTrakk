import { Link } from "react-router"

interface props{
    text:string
}
interface dashboard{
    dashboard:props[]
}

const dashboard=[{text:"Dashboard"},{text:"All Logs"}]

export default function Sidebar(/* {dashboard}:dashboard */) {
  return (
    <div className="flex min-h-screen flex-col justify-between border-e border-white/30 bg-slate-950 ">
    <div className="px-4 py-6">
        <Link to='/' className="grid h-10 w-28 place-content-center rounded-lg text-xl text-green-400 font-body">
        FitTrakk
        </Link>
        <ul className="mt-20 space-y-1">
            {dashboard.map((d,index)=>(
                 <li key={index}>
                    <Link to={d.text==="Dashboard"?"/home":d.text==="All Logs"?"/alllogs":'/'} className="block font-body text-white/60 hover:bg-green-400/30 hover:scale-102 duration-300 hover:p-4 rounded-lg my-7  px-4 py-4 text-sm font-medium ">
                    {d.text}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    </div>
  )
}
