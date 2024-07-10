import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";
import { useSelector } from "react-redux";
import FetchStatus from "../components/fetchStatus";
import Loading from "../components/loading";

import ErrorDisplay from "../components/ErrorDisplay";




export default function App() {

  const fetchData=useSelector(store=>store.fetchStatus)
  const mo=useSelector(store=>store.movies)
  

//   const FetchData=async()=>{
//     try {
//       const response =await axiosInstance.get('/trending/all/week')
//       console.log(response)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(()=>{
//     FetchData()
//  },[])


try {

  
  return (
    <>
        
       <main className="pb-14 lg:pb-0">
           <Header />
           <FetchStatus/>
           <div className="min-h-[100vh]" >
             {fetchData.fetchDone?<Outlet/>:<Loading/>}
           </div>
          
          <Footer/>
     
           <MobileNavigation/>
       </main>
      
    </>
      )
  
} catch (error) {

  return <ErrorDisplay errorMessage={error.message}/>   
}
}