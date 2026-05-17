import Header from "../Heading Component/Header";

export default function Redirecting() {
  return (
    <div className="w-full h-screen bg-zinc-950 flex gap-4 text-center flex-col items-center justify-center">
         <Header
            Heading="Your transformation starts now 🔥"
            subHeading="Before we dive in, we need to know a little about you. 4 quick questions — your height, weight, age, and goal. That's it."
            headingWidth="max-w-5xl text-white text-center"
            subHeadingWidth="max-w-3xl text-center"
        />
        <div className="animate-spin w-10 h-10 border-4 border-lime-400 border-t-transparent rounded-full mt-4"/>
  
  {/* ✅ Progress text */}
        <p className="text-white/30 font-body text-sm">Redirecting you in a moment...</p>
    </div>
   
  )
}
