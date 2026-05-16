

const now = new Date(Date.now());
    const day = now.getDate();
    const month = now.toLocaleString('en-GB', { month: 'short' });
    const year = now.getFullYear();
    const weekday = now.toLocaleString('en-GB', { weekday: 'long' });

const weekDay=weekday
export const formatted = `${day} ${month} ,  ${year} ( ${weekDay} ) `;

export const allButtons=[
      [{id:1,text:"Add Meal",reverse:true},{id:2,text:"Save",reverse:true}],
      [{id:1,text:"Save",reverse:true}],
      [{id:1,text:"Save",reverse:true}
      ],
    ]
    
export const allInputs=[
      [{id:1,type:'text',placeholder:'Quantity (in g)',name:'qty'},
      {id:2,type:'text',placeholder:'Meal Name',name:"mealName"}],
      [{id:1,type:'text',placeholder:'Total Steps',name:'steps'},
      {id:2,type:'text',placeholder:'Cal Burned',name:"calBurn"}],
      [{id:1,type:'text',placeholder:"Gym Time (in mins)",name:'time'},
      {id:2,type:'text',placeholder:'Body Part Trained (Chest,Back ) ',name:"workout"}]
    ]
  
export const OptionButtons=[
        {id:1,text:"Add Meal",reverse:false},
        {id:2,text:"Add Steps",reverse:false},
        {id:3,text:"Add Gym Workout",reverse:false}
    ]  

