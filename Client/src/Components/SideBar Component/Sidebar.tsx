interface props{
    text:string
}
interface dashboard{
    dashboard:props[]
}

const dashboard=[{text:"Dashboard"},{text:"All Logs"},{text:"Log Out"}]

export default function Sidebar(/* {dashboard}:dashboard */) {
  return (
    <div className="flex h-screen flex-col justify-between border-e border-white/30 bg-zinc-950">
    <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
        Logo
        </span>
        <ul className="mt-12 space-y-1">
            {dashboard.map((d,index)=>(
                 <li key={index}>
                    <a href="#" className="block rounded-lg my-7 bg-lime-400 px-4 py-4 text-sm font-medium text-black">
                    {d.text}
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </div>
  )
}
