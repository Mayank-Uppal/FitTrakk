interface props{
    icons?:any,
    title?:string,
    goalNum?:any,
    actualNum?:any
}

export default function HomeCard({ icons,goalNum,title,actualNum }: props) {
  return (
    <>
        <div className="lg:w-full flex border justify-center items-center border-white/30 flex-col hover:scale-105 duration-300 gap-4 rounded-md  md:py-10 py-7  px-10  hover:border-none">
        <div className="flex flex-col justify-center items-center gap-4">
            {icons}
            <h1 className="text-white/70 md:text-xl text-sm font-body">{title}</h1>
            <div className="flex flex-col justify-center items-center gap-4 mt-6">
                <div className="flex flex-row justify-between md:gap-40 gap-20 text-left ">
                    <h1 className="font-body text-white/70  md:text-lg text-md">Daily Goal</h1>
                    <h1 className="font-bold font-body text-green-500 md:text-xl text-lg">{goalNum}</h1>
                </div>
                <div className="flex flex-row justify-between md:gap-40 gap-20 text-left " >
                    <h1 className="font-body text-white/70 md:text-lg text-md">Daily Average</h1>
                    <h1 className="font-bold font-body text-green-500 md:text-xl text-lg">{actualNum}</h1>
                </div>
                <div className="w-full md:max-w-sm max-w-lg px-4 md:px-0 mt-4">
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
