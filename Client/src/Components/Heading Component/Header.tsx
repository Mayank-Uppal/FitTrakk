interface HeadingProp{
  Heading:string,
  subHeading:string,
  headingWidth:string,
  subHeadingWidth:string
}

export default function Header({Heading,subHeading,headingWidth,subHeadingWidth}:HeadingProp) {
  return (
    <>
    <h1 className={`text-6xl font-body font-extrabold ${headingWidth} `}>{Heading}</h1>
    <p className={`text-2xl text-white/45 font-body ${subHeadingWidth}`}>{subHeading}</p>
    </>
  )
}
