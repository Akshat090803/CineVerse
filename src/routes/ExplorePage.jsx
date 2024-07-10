import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axios/axios";
import Card from "../components/Card";
import ErrorDisplay from "../components/ErrorDisplay";

function ExplorePage() {
  const params = useParams();
const [errorMessage,setErrorMessage]=useState('')
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  //! async func for getting api data
  const fetchExplore = async () => {
    try {
      
      const response = await axiosInstance.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
  
      setTotalPage(response.data.total_page);
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      setErrorMessage(error.message)
    }
  };

  //!useEfect for calling fetchexplore
  useEffect(() => {
    fetchExplore();
  }, [pageNo]);

  // !useefefect whenever we change movie or tv tab ,params.explore change
  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchExplore();
  }, [params.explore]);

  // !function along with condition for updating page no.
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      setPageNo((prev) => prev + 1);
    
    }
  };
 

  //! useEffect for window event listner for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    //!clearance of useEffect
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  // displaying error message
  if(errorMessage){
       return <ErrorDisplay errorMessage={errorMessage}/>
  
  }
 
  
  try {

    return  (
      <>
   
       <div className="pt-16 mb-14 ">
        
         <div className="container mx-auto px-4">
           <h3 className="capitalize text-lg font-semibold lg:text-2xl my-4">{`popular ${
             params.explore == "movies" ? "movies" : "TV Shows"
           }`}</h3>
           <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
             {data.map((exploreData, index) => {
               return (
                 <Card
                   key={exploreData.id + params.explore + index}
                   item={exploreData}
                   trending={false}
                   media_type={params.explore}
                 />
               );
             })}
           </div>
         </div>
       </div>
       </>
     );
     
    
  } catch (error) {
     return <ErrorDisplay errorMessage={error.message}/>   

  }

 
}

export default ExplorePage;


  /* <div className="pt-16 mb-14 ">
      <div className="container mx-auto px-4">
        <h3 className="capitalize text-lg font-semibold lg:text-2xl my-4">{`popular ${
          params.explore == "movies" ? "movies" : "TV Shows"
        }`}</h3>
        <div className="flex flex-wrap gap-5">
          {data.map((exploreData, index) => {
            return (
              <Card
                key={exploreData.id + params.explore + index}
                item={exploreData}
                trending={false}
                media_type={params.explore}
              />
            );
          })}
        </div>
      </div>
    </div> */

