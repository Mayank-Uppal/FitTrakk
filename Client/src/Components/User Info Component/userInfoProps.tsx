export const steps = [
    {
        heading: "How tall are you? ↕️",
        subHeading: "Your height is the foundation of everything — we use it alongside your weight and age to calculate your BMR, estimate your daily calorie burn, and set targets that are actually built for your body, not just an average.",
        headingWidth: "max-w-6xl text-white",
        subHeadingWidth: "max-w-5xl"
    },
    {
        heading: "Where are you starting from? 🏁",
        subHeading: "Your current weight is your starting point — not a judgement, just a number. We use it to calculate how many calories your body burns at rest and build a plan that moves you closer to your goal every single day.",
        headingWidth: "max-w-6xl text-white",
        subHeadingWidth: "max-w-4xl"
    },
    {
        heading: "How old are you? 🎂",
        subHeading: "Age affects your metabolism, recovery speed, and how your body responds to training. A 20-year-old and a 35-year-old with identical stats need very different targets — your age makes sure your plan is built for you specifically.",
        headingWidth: "max-w-6xl text-white",
        subHeadingWidth: "max-w-4xl"
    },
    {
        heading: "What's your main goal? 🎯",
        subHeading: "This is the most important question we'll ask. Your goal determines everything — your daily calorie target, macro split, step count, and net calorie balance are all calculated differently based on what you're trying to achieve.",
        headingWidth: "max-w-6xl text-white",
        subHeadingWidth: "max-w-4xl"
    },

]

export const allInputs = [
    [
        { id: 1, type: "number", placeholder: "Enter your height  (cm)",name:"height" }
    ],
    [
        { id: 1, type: "number", placeholder: "Enter your weight (e.g 60 kg)",name:"weight" },
    ],
    [
        { id: 1, type: "number", placeholder: "Your Age",name:"age" }
    ],
    [
        { id: 1, type: "radio", span: "I want to lose fat and look leaner", name: "goal" },
        { id: 2, type: "radio", span: "I want to build a stronger, muscular body", name: "goal" },
        { id: 3, type: "radio", span: "I want more energy and better stamina", name: "goal" },
        { id: 4, type: "radio", span: "I just want to stay consistent and healthy", name: "goal" },
    ]
]

