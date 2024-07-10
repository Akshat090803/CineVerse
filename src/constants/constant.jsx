import { IoMdHome } from "react-icons/io";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
const navItem=[
  {
    label:"Home",
    href:"/",
    icon:<IoMdHome />
  },
  {
    label:"TV",
    href:"tv",
    icon:<PiTelevisionFill />
  },
  {
    label:"Movies",
    href:"movie",
    icon:<BiSolidCameraMovie />
  },
  {
    label:"search",
    href:"/search",
    icon:<IoIosSearch/>
  },

]

export default navItem