import { NavLink } from "react-router-dom"
import navItem from "../constants/constant"
function MobileNavigation(){
  return (
<section className="lg:hidden h-12 bg-black bg-opacity-70 z-40 backdrop-blur-3xl fixed bottom-0 p-0 w-full">
  <div className="flex justify-between items-center h-full text-neutral-400">
    {
      navItem.map((item)=>{
        return <NavLink to={item.href} key={item.label+"mobile"} className={({isActive})=>{ return isActive && "text-white"}}>    
          <div className=" px-2 flex flex-col justify-center items-center h-full">
           <div className="text-2xl">
           {item.icon}
           </div>
            <p className="text-sm">{item.label}</p>
          </div>
        </NavLink>
      }) 
    }
  </div>
  
</section>
  )
}
export default MobileNavigation