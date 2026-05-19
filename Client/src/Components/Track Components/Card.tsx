interface props{
  icons:any,
  title:any,
  data:any
}
interface cardProp{
  cardOptions:props[]
}
export default function Card({cardOptions}:cardProp) {
  return (
    <>
    {cardOptions.map((op,index)=>(
      <div key={index} className="w-full max-w-sm flex  border justify-between items-center border-white/30 flex-col hover:scale-102 duration-300 gap-4 rounded-md px-10 py-10   hover:border-none">
          {op.icons}
            <h1 className="text-white/70 text-lg font-body">{op.title}</h1>
        <h1 className="font-bold text-green-500 text-2xl">{op.data}</h1>
    </div>
    ))}
    </>
  )
}
