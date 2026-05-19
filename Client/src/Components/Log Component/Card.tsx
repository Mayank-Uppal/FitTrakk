interface props{
    dates:string,
    totalCalorie:number,
    totalSteps:number,
    totalGym:number
}
interface logProp{
    allLog:props[],
    handleClick:(index:number)=>void
}

export default function Card({allLog,handleClick}:logProp) {
  return (
    <>
    {allLog.map((log,index)=>(
        <>
        <div key={index} className="w-full rounded-md border border-white/30 py-7 mb-4 px-4   hover:scale-102 hover:border-none flex flex-row justify-between items-center duration-250">
        <div className="max-w-5xl px-10 flex flex-col gap-2"> 
            <p className="text-lg text-white font-body ">{log.dates}</p>
            <div className="flex flex-row gap-4">
                <p className="text-md text-white/40 font-body ">Total Calories : </p>
                <p className="text-md text-green-400 font-body ">{log.totalCalorie} kcal </p>
                <p className="text-md text-white/40 font-body ">|</p>
                <p className="text-md text-white/40 font-body ">Steps : </p>
                <p className="text-md text-green-400 font-body ">{log.totalSteps}</p>
                <p className="text-md text-white/40 font-body ">|</p>
                <p className="text-md text-white/40 font-body ">Gym : </p>
                <p className="text-md text-green-400 font-body ">{log.totalGym} mins</p>
            </div>
        </div>

        <div className="max-w-2xl px-10">
            <button type="submit" onClick={() => handleClick(index)}  className="group w-full relative inline-block overflow-hidden border border-green-400/50 px-8 py-4 rounded-md" >
            <span className={`absolute inset-y-0 left-0 transition-all duration-300 bg-green-500 w-full group-hover:w-0 hover:text-white text-black"`}></span>
            <span className={`relative text-md  text-black group-hover:text-white font-body font-extrabold transition-colors`}>
                    View Log
            </span>
            </button>
        </div>
    </div>
        </>
    ))}
    </>
  )
}
