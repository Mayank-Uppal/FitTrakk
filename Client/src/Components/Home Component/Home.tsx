import Sidebar from "../SideBar Component/Sidebar";
import MainHome from "./MainHome";

export default function Home() {
  
  return (
    <div className="flex flex-row w-full">
      <div className="lg:block hidden w-1/5">
        <Sidebar/>
      </div>
      <div className="lg:w-4/5 w-full">
        <MainHome/>
      </div>      
    </div>
  )
}
