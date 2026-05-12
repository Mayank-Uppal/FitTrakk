import Button from "../Button Component/Button"
import Header from "../Heading Component/Header"
import Navbar from "../Navbar Component/Navbar"

export default function MainHome() {

    const button=[{id:1,text:"Add your first log",reverse:false}]
  return (
    <>
    <div className="flex flex-col bg-zinc-950 items-center text-center h-screen">
        <Navbar />
        <div className=" text-center flex flex-col mt-60 items-center gap-4">
            <Header
            Heading="Hey mayank, day one starts now."
            subHeading="Track your calories, steps, and gym time — and watch your progress speak for itself."
            headingWidth="max-w-5xl text-white text-2xl"
            subHeadingWidth="max-w-2xl"/>

            <div className="mt-7">  
                <Button buttons={button}/>
            </div>
        </div>
        
    </div>
    </>
  )
}
