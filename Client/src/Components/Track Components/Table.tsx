import { mealType } from "./Props"

export interface prop{
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
    <div className="max-h-90 overflow-x-auto rounded-md ">
        <table className="min-w-full divide-y-2 divide-gray-200 rounded-md">
            <thead className="sticky top-0 bg-green-500/30 text-left">
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
                        <td className="px-3 py-2 whitespace-nowrap">{m?.meal?.charAt(0).toUpperCase() + m?.meal?.slice(1).toLowerCase()}</td>
                        <td className="px-3 py-2 whitespace-nowrap">{mealType.charAt(0).toUpperCase() + mealType.slice(1).toLowerCase()}</td>
                        <td className="px-3 py-2 whitespace-nowrap">{m.qty} g</td>
                        <td className="px-3 py-2 whitespace-nowrap">
                            {m.cal} kcal
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                            {m.protein} g
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                            {m.carbs} g
                        </td>
                         <td className="px-3 py-2 whitespace-nowrap">
                            {m.fat} g
                        </td>
                    </tr>      
                ))}         
            </tbody>
        </table>
    </div>
  )
}
