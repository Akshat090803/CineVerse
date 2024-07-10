import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import ExplorePage from "./ExplorePage";
import DetailsPage from "./DetailsPage";
import Search from "./Search";
import About from "./About";



const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:'',element:<Home/>},
      {path:":explore",element:<ExplorePage/>},
      {path:":explore/:id",element:<DetailsPage/>},
      {path:"/search",element:<Search/>},
      {path:"/about",element:<About/>}
    ]
  }
])

export default router