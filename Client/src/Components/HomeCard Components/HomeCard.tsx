interface props{
    icons?:any,
    title?:string,
    goalNum?:any,
    actualNum?:any
}

export default function HomeCard({ icons,goalNum,title,actualNum }: props) {
  return (
    <>
        <div className="w-full flex border justify-center items-center border-white/30 flex-col hover:scale-105 duration-300 gap-4 rounded-md  py-10   hover:border-none">
        <div className="flex flex-col justify-center items-center gap-4">
            {icons}
            <h1 className="text-white/70 text-xl font-body">{title}</h1>
            <div className="flex flex-col justify-center items-center gap-4 mt-6">
                <div className="flex flex-row justify-between gap-40 text-left ">
                    <h1 className="font-body text-white/70  text-lg">Daily Goal</h1>
                    <h1 className="font-bold font-body text-green-500 text-xl">{goalNum}</h1>
                </div>
                <div className="flex flex-row justify-between gap-40 text-left" >
                    <h1 className="font-body text-white/70 text-lg">Daily Average</h1>
                    <h1 className="font-bold font-body text-green-500 text-xl">{actualNum}</h1>
                </div>
                <div className="w-full max-w-sm mt-4">
                <div className="flex justify-between  mb-1">
                    <span className="text-white/50 text-sm">Progress</span>
                    <span className="text-green-500 text-sm font-bold">{Math.round((actualNum/goalNum)*100)}%</span>
                </div>
                <div className="h-4 overflow-hidden animate-pulse duration-75 rounded-full bg-gray-700">
                    <div 
                    className="h-full rounded-full bg-green-500 transition-all  animation-pulse duration-500"
                    style={{ width: `${Math.min((actualNum/goalNum)*100, 100)}%` }}
                    />
                </div>
                </div>
            </div>
        </div>
    </div>
      </>
  )
}   
