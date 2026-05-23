interface HeadingProp{
  Heading:string,
  subHeading:string,
  headingWidth:string,
  subHeadingWidth:string
}

export default function Header({Heading,subHeading,headingWidth,subHeadingWidth}:HeadingProp) {
  return (
    <>
    <h1 className={`md:text-6xl text-xl font-body font-extrabold ${headingWidth} `}>{Heading}</h1>
    <p className={`md:text-2xl text-sm text-white/45 font-body ${subHeadingWidth}`}>{subHeading}</p>
    </>
  )
}
