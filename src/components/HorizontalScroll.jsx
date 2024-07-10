import { useRef, useState } from "react";
import Card from "./Card";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

function HorizontalScroll({ data, heading ,trending,media_type,error}) {
  const containerScrollRef = useRef();
  // scroll functions
  // !const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   setScrollPosition(containerScrollRef.current.scrollLeft);
  // };

  const handleLeft = () => {
    // containerScrollRef.current.scrollTo({
    //   left: scrollPosition - 500, // Scroll to the left by reducing the scrollLeft value
    //   behavior: "smooth",
    // });
    containerScrollRef.current.scrollLeft-=400
  };

  const handleRight = () => {
    // containerScrollRef.current.scrollTo({
    //   left: scrollPosition + 500, // Scroll to the right by increasing the scrollLeft value
    //   behavior: "smooth",
    // });
    containerScrollRef.current.scrollLeft+=400
  };
//displaying error message
  if(error){
    return (
      <div className="container mx-auto py-16 px-3 flex justify-center items-center h-screen ">
        <div className="flex flex-col justify-center items-center p-5 bg-neutral-800 rounded-md">
          <div className="text-3xl ">🐣</div>
          <p className="text-white text-xl">{errorMessage}</p>
          <p className="text-sm">To Fix: Reload or check the url correctly</p>
        </div>
      </div>
    )
  }
  else{

  return (
    <div className="container mx-auto px-4 my-10 lg:my-14">
      <h2 className="text-xl lg:text-3xl text-white font-bold mb-3 capitalize">
        {heading}
      </h2>
      <div className="relative">
        <div
          ref={containerScrollRef}
          className="  grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col overflow-hidden overflow-x-scroll z-10 scrollbar-none gap-5 scroll-smooth"
          // onScroll={handleScroll}
          style={{
           
            scrollBehavior: "smooth",
            transition: "scroll-left 0.5s ease-in-out",
          }}
        >
          {/* grid-flow-col will let item fill in colums only not in rows means there will be only one row */}
          {/* instead of grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col we can give just flex also */}
          {/* flex will work same as grid . <div className=" flex overflow-hidden gap-4"> */}
          {data.map((item, index) => {
            
            return (
              <Card
                key={item.id + heading}
                item={item}
                index={index + 1}
                trending={trending}
                media_type={media_type}
              />
            );
          })}

          
          
        
        </div>
      </div>
    </div>
  );
}
}
export default HorizontalScroll;
