import Header from "../Heading Component/Header"
export default function RedirectingAI() {
  return (
    <div className="w-full h-screen bg-zinc-950 flex gap-4 text-center flex-col items-center justify-center">
            <Header
                Heading="Analyzing your data and calculating your ideal targets using AI ✨"
                subHeading="Hang tight — we're crunching the numbers on your height, weight, age, and goal to build a plan that's made entirely for you."
                headingWidth="max-w-7xl text-xl text-white text-center"
                subHeadingWidth="max-w-4xl text-md text-center"
            />
            <div className="animate-spin w-10 h-10 border-4 border-lime-400 border-t-transparent rounded-full mt-4"/>
      {/* ✅ Progress text */}
            <p className="text-white/30 font-body text-sm">Redirecting you in a moment...</p>
    </div>
  )
}
