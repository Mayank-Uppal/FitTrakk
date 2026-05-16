
export default function Card() {
  return (
    <div className="w-full max-w-sm flex border justify-between items-center border-white/30 flex-row hover:scale-110 duration-300 gap-4 rounded-md px-10 py-10  hover:bg-lime-500/30 hover:border-none">
        <div className="flex flex-col gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-footprints-icon lucide-footprints"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/></svg>
            <h1 className="text-white/70 text-xl font-body">Total Steps</h1>
        </div>
     
        <h1 className="font-bold text-lime-500 text-4xl">0</h1>
    </div>
  )
}
