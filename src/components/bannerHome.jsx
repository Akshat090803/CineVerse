import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


function BannerHome() {
  const { bannerData } = useSelector((store) => store.movies);
  const { bannerURL } = useSelector((store) => store.movies);
  const navigate=useNavigate()

  // for nexr prev navigation
  let [imgPos, setImgPos] = useState(11);
  
  // !next
  const handleRight = () => {
    if (imgPos < bannerData.length - 1) {
      setImgPos((prev)=>prev+1);
    
    }
  };
  // !previous
  const handleLeft = () => {
    if (imgPos > 0) {
      setImgPos((prev)=>prev-1);

    }
  };
  // !for auto slide
  useEffect(()=>{
    const interval=setInterval(()=>{
      if (imgPos < bannerData.length - 1) {
        setImgPos((prev)=>prev+1);
     
      }
      else{
        setImgPos(0)
      }
    },4000)
   

    return ()=>clearInterval(interval)
  },[bannerData,bannerURL,imgPos])

  return (
    <section className="w-full h-full">
      <div className="flex mx-auto min-h-full max-h-[95vh] overflow-x-auto lg:overflow-hidden ">
        {bannerData.map((item) => {
          return (
            <div
              key={item.id}
              style={{transform:`translateX(-${imgPos * 100}%)`,transition:'transform 1.5s ease-in-out'}}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group" 
              
            >
              <div className="h-full w-full">
                <img
                  src={bannerURL + item.backdrop_path}
                  alt={item?.title || item?.name}
                  className="h-full w-full object-cover "
                />
              </div>
              {/* navigation?imageSlider button */}
              <div className="absolute top-0 hidden group-hover:lg:flex items-center h-full w-full justify-between px-4 pb-9  transition-all duration-400 linear">
                <button
                  className=" bg-white p-1 rounded-full text-xl text-black z-10"
                  onClick={handleLeft}
                >
                  <FaAngleLeft className="left-icon " />
                </button>
                <button
                  className="bg-white p-1 rounded-full text-xl text-black z-10 "
                  onClick={handleRight}
                >
                  <FaAngleRight className=" right-icon" />
                </button>
              </div>

              {/* summary movie */}
              <div className="absolute top-0 h-full w-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container mx-auto px-4  mb-6 ">
                <div className="absolute bottom-0 w-full max-w-md mb-10">
                  <h2 className="font-bold text-white text-2xl lg:text-4xl drop-shadow-2xl">
                    {item.title || item.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 pt-2">
                    {item.overview}
                  </p>
                  <div className="flex gap-5 items-center mb-4 pt-2">
                    <span>{`Rating: ${item.vote_average.toFixed(1)} ⭐`}</span>
                    <span>|</span>
                    <span>{`Views: ${item.vote_count}`}</span>
                  </div>
                  <button className="bg-white text-black font-bold py-2 px-4 rounded-md mb-4   hover:bg-gradient-to-r from-red-500 to-orange-500 transition-all hover:scale-105  "
                  onClick={()=>{console.log(item)
                    navigate("/"+item?.media_type+"/"+item?.id)
                  }}>
                    Explore
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BannerHome;
