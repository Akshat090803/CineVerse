import { useSelector } from "react-redux";
import BannerHome from "../components/bannerHome";
import Card from "../components/Card";
import HorizontalScroll from "../components/HorizontalScroll";
import useFetch from "../components/useFetch hook";

// import axios

function Home() {
  const trendingData = useSelector((store) => store.movies.bannerData);
  
  const {data:nowPlayingData,errorMessage:errorNow}=useFetch('/movie/now_playing')
  const {data:topRatedData,errorMessage:errorTop}=useFetch('/movie/top_rated')
  const {data:popularTVShowData,errorMessage:errorPop}=useFetch('/tv/popular')
  const {data:onTheAir,errorMessage:errorAir}=useFetch('/tv/on_the_air')


  return (
    <div>
      <BannerHome />
      <HorizontalScroll data={trendingData} heading={"Trending Shows"} trending={true} media_type={'movie'} />
      <HorizontalScroll data={nowPlayingData} heading={"Now Streaming"} trending={false} media_type={'movie'} error={errorNow}/>
      <HorizontalScroll data={topRatedData} heading={"Top rated movies"} trending={false} media_type={'movie'} error={errorTop}/>
      <HorizontalScroll data={popularTVShowData} heading={"Popular TV Shows"} trending={false} media_type={'tv'} error={errorPop}/>
      <HorizontalScroll data={onTheAir} heading={"on the air"} trending={false} media_type={'tv'} error={errorAir}/>
    
    </div>
  );
}

export default Home;


// <div className="container mx-auto px-6 my-10">
// <h2 className="text-xl lg:text-3xl text-white font-bold mb-3">
//   Trending Shows
// </h2>
// <div className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col overflow-hidden gap-4">
//   {/* grid-flow-col will let item fill in colums only not in rows means there will be only one row */}
//   {/* instead of grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col we can give just flex also */}
//   {/* flex will work same as grid . <div className=" flex overflow-hidden gap-4"> */}
//   {trendingData.map((item,index) => {
//     return <Card key={item.id} item={item} index={index+1} trending={true} />;
//   })}
// </div>
// </div>