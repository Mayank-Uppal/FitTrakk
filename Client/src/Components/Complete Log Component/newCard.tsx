interface newprops{
  icons:any,
  title:any,
  data:any
}
export default function NewCard({icons,title,data}:newprops) {
  return (
    <>
      <div className="border justify-between lg:py-4 py-4 items-center border-white/30 flex flex-row hover:scale-102 duration-300 gap-4 rounded-md lg:px-10 px-7  hover:bg-slate-9000 hover:border-none">
            <div className="flex flex-row gap-2">
              {icons}
              <h1 className="text-white/70 lg:text-lg text-sm font-body">{title}</h1>
            </div>
            <h1 className="font-bold text-green-500 lg:text-2xl text-lg">{data}</h1>
        </div>
    </>
  )
}
