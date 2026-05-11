import Header from "../Heading Component/Header";
import Button from "../Button Component/Button";

export default function NormalHome({homebuttons}) {
  return (
    <>
    <Header
        Heading="Your Fitness. Your Rules. Your Results."
        subHeading="Stop guessing what you eat and burn. FitTrakk gives you 
        a crystal clear picture of every meal, every rep, and every 
        step — so you can make smarter decisions and actually see progress."
        headingWidth="max-w-6xl text-white"
        subHeadingWidth="max-w-5xl"
    />
        <div className="w-full max-w-xl mt-4 flex flex-col gap-4">
            <Button buttons={homebuttons} />
        </div>
    </>
  )
}
