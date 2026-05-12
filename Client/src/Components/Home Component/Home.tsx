import Sidebar from "../SideBar Component/Sidebar";
import MainHome from "./MainHome";

export default function Home() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/6">
        <Sidebar/>
      </div>
      <div className="w-5/6">
        <MainHome/>
      </div>      
    </div>
  )
}
