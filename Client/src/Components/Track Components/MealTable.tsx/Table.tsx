interface prop{
    meal?:string,
    time?:string,
    qty?:string,
    cal?:string,
    protein?:string,
    carbs?:string,
    fat?:string
}

interface MealProp{
    MealData:prop[]
}

export default function Table({MealData}:MealProp) {
  return (
    <div className="max-h-90 overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 rounded-md">
            <thead className="sticky top-0 bg-lime-500/30 ltr:text-left rtl:text-right">
                <tr className="*:font-medium *:text-white/50 ">
                    <th className="px-3 py-4 whitespace-nowrap">Meal</th>
                    <th className="px-3 py-2 whitespace-nowrap">Meal Time</th>
                    <th className="px-3 py-2 whitespace-nowrap">Qty</th>
                    <th className="px-3 py-2 whitespace-nowrap">Calories</th>
                    <th className="px-3 py-2 whitespace-nowrap">Protein</th>
                    <th className="px-3 py-2 whitespace-nowrap">Carbs</th>
                    <th className="px-3 py-2 whitespace-nowrap">Fat</th>

                </tr>
            </thead>

            <tbody className="divide-y  ">
                {MealData?.map((m,index)=>(
                     <tr key={index} className="*:text-white *:first:font-medium">
                        <td className="px-3 py-2 whitespace-nowrap">{m.meal}</td>
                        <td className="px-3 py-2 whitespace-nowrap">{m.time}</td>
                        <td className="px-3 py-2 whitespace-nowrap">{m.qty}</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                            {m.cal}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                            {m.protein}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                            {m.carbs}
                        </td>
                         <td className="px-3 py-2 whitespace-nowrap">
                            {m.fat}
                        </td>
                    </tr>

                ))}
               
            </tbody>
        </table>
    </div>
  )
}
