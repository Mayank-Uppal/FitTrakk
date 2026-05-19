import { mealType } from "./Props"
export default function Meal() {
  
  return (
      <div className="px-20 py-4 bg-green-600/30 rounded-md ">
        <p className="text-xl  text-center font-body text-white/50">{mealType}</p>
      </div>
  )
}
