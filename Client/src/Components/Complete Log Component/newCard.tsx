interface newprops{
  icons:any,
  title:any,
  data:any
}
export default function NewCard({icons,title,data}:newprops) {
  return (
    <>
      <div className="border justify-between py-4 items-center border-white/30 flex flex-row hover:scale-102 duration-300 gap-4 rounded-md px-10  hover:bg-slate-9000 hover:border-none">
            <div className="flex flex-row gap-2">
              {icons}
              <h1 className="text-white/70 text-lg font-body">{title}</h1>
            </div>
            <h1 className="font-bold text-green-500 text-2xl">{data}</h1>
        </div>
    </>
  )
}
