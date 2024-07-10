import { useSelector } from "react-redux";
import moment from "moment";
import { Link, NavLink } from "react-router-dom";

function Card({ item, index, trending,media_type }) {
  const { bannerURL } = useSelector((store) => store.movies);
  const mediatype=item.media_type ?? media_type
  if(!item.poster_path){
    return
  }else{
  return (
    <>
             
      <Link
          to={"/"+media_type+"/"+item.id} className="flex flex-col rounded cardHover hover:scale-105 transition-all "
          >
        <div
          className="w-full min-w-[230px] max-w-[230px] min-h-80 max-h-80 overflow-hidden rounded-tl rounded-tr relative"
        >
      
          <img src={bannerURL + item.poster_path} alt={item?.title || item?.name} />
          <div className="absolute top-1">
            {trending && (
              <span class="  bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">{`#${index} Trending`}</span>
            )}
          </div>
        </div>

        <div className=" h-14 min-w-[230px] max-w-[230px] backdrop-blur-3xl rounded-br rounded-bl p-2 bg-black  overflow-hidden">
          <h2 className="truncate font-semibold">{item.title || item.name}</h2>
          <div className="text-xs text-neutral-400 flex justify-between items-center ">
            <p>{moment(item.release_date).format("MMMM D YYYY")}</p>
            <p className="px-1 text-white">{`${Number(item?.vote_average).toFixed(1) || "NA"} ⭐`}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
}

export default Card;

// <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">Red</span>
