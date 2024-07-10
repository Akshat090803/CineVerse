import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import profile from '../assets/user.png'
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import movie1 from "../assets/movie-logo.png"
import movie2 from "../assets/movie2.png"
import movie3 from "../assets/movie-3.png"
import movie4 from "../assets/movie4.png"
import movie5 from "../assets/movie5.png"
import movie7 from "../assets/movie7.png"
import movie8 from "../assets/movie8.png"
import movie9 from "../assets/movie9.png"
import movie11 from "../assets/movie11.png"
import movie12 from "../assets/movie12.png"
import movie13 from "../assets/movie13.png"
import movie14 from "../assets/movie14.png"
import movie15 from "../assets/movie15.png"
import movie16 from "../assets/movie16.png"
import movie17 from "../assets/movie17.png"

function Header(){

  const location =useLocation()
  const removeSpace=location?.search?.slice(3)?.split('%20')?.join(' ')
  const [searchItems,setSearchItems]=useState(removeSpace)
  const navigate=useNavigate()
  

  const handleSubmit=(e)=>{
    e.preventDefault()
  
  }

  useEffect(()=>{
        if(searchItems){
          navigate(`/search/?q=${searchItems}`)
        }
     
  },[searchItems])
  

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-4 flex items-center   h-full">
        <Link to='/'>
          <img src={movie17} alt="log" width={130} />
        </Link>

        <nav className="hidden lg:flex gap-1 items-center ml-5 ">
          <NavLink
            to={"/movie"}
            className={({ isActive }) =>{
              return `px-2 hover:text-neutral-100 navLink-animation ${isActive && "text-neutral-50"}`
            }

            }
          >
            Movies
          </NavLink>
          <NavLink
            to={"/tv"}
            className={({ isActive }) =>
              `px-2 hover:text-neutral-100 navLink-animation ${
                isActive ? "text-neutral-100" : ""
              }`
            }
          >
            TV Shows
          </NavLink>
        </nav>

        <div className="ml-auto flex justify-center gap-4">
          <form className="  hidden lg:flex justify-center gap-0  " onSubmit={handleSubmit}>

            <input type="text" placeholder="Search here..." className=" 
            bg-transparent px-2 py-1 outline-none border-none abc" onChange={(e)=>setSearchItems(e.target.value)} value={searchItems} />
            <button>
               <IoIosSearch className="text-white text-2xl" />
            </button>
          </form>
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer  active:hue-rotate-180 transition-all 
          ">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header