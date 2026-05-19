
import Header from "../Heading Component/Header"

export default function Summary() {
  return (
    <div className="w-full h-screen bg-slate-950 flex gap-4 text-center flex-col items-center justify-center">
             <Header
                Heading="Loading your day's summary 💪"
                subHeading="Getting all your meals, steps and workout details for this day."
                headingWidth="max-w-5xl text-white text-center"
                subHeadingWidth="max-w-3xl text-center"
            />
            <div className="animate-spin w-10 h-10 border-4 border-green-400 border-t-transparent rounded-full mt-4"/>
            <p className="text-white/30 font-body text-sm">This will only take a moment...</p>
    </div>
  )
}