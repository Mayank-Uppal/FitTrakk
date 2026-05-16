export const steps = [
    {
        heading: "What's your height ?",
        subHeading: "We use this to personalize your daily calorie goals and fitness recommendations.",
        headingWidth: "max-w-6xl text-white",
        subHeadingWidth: "max-w-4xl"
    },
    {
        heading: "Where are you starting from ?",
        subHeading: "Knowing your weight lets us measure your progress and celebrate every milestone with you.",
        headingWidth: "max-w-6xl text-white",
        subHeadingWidth: "max-w-4xl"
    },
    {
        heading: "How old are you ?",
        subHeading: "Age plays a big role in metabolism — this helps us fine-tune your nutrition and fitness plan.",
        headingWidth: "max-w-6xl text-white",
        subHeadingWidth: "max-w-4xl"
    },
    {
        heading: "How old are you ?",
        subHeading: "Age plays a big role in metabolism — this helps us fine-tune your nutrition and fitness plan.",
        headingWidth: "max-w-6xl text-white",
        subHeadingWidth: "max-w-4xl"
    },

]

export const allInputs = [
    [
        { id: 1, type: "number", placeholder: "5'5 ft",name:"height1" }, 
        { id: 2, type: "number", placeholder: "140 cm",name:"height2" }
    ],
    [
        { id: 1, type: "number", placeholder: "60 kg",name:"weight1" }, 
        { id: 2, type: "number", placeholder: "60 lbs",name:"weight2" }
    ],
    [
        { id: 1, type: "text", placeholder: "Your Age",name:"age" }
    ],
    [
        { id: 1, type: "radio", span: "I want to lose fat and look leaner", name: "goal" },
        { id: 2, type: "radio", span: "I want to build a stronger, muscular body", name: "goal" },
        { id: 3, type: "radio", span: "I want more energy and better stamina", name: "goal" },
        { id: 4, type: "radio", span: "I just want to stay consistent and healthy", name: "goal" },
    ]
]

