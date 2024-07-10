import {  useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetchDetails from "../components/useFetchDetails hook";
import HorizontalScroll from "../components/HorizontalScroll";
import useFetch from "../components/useFetch hook";
import ErrorDisplay from "../components/ErrorDisplay";
import VideoPlay from "../components/videoPlay";

import moment from "moment";
import { useState } from "react";
function DetailsPage() {
  const { bannerURL } = useSelector((store) => store.movies);
  const params = useParams();
  // movie data
  const { data, errorMessage: errorData } = useFetchDetails(
    `/${params.explore}/${params.id}`
  );
  // cast data
  const { data: castDetails, errorMessage: errorCast } = useFetchDetails(
    `/${params.explore}/${params.id}/credits`
  );

  // Recomendation movie data
  const { data: recommendation, errorMessage: recomError } = useFetch(
    `/${params.explore}/${params.id}/recommendations`
  );

  // video data
  const [videoID, setVideoID] = useState("");
  //video state true or false
  const [playVideo, setPlayVideo] = useState(false);

  // func on click btn
  const handlePlayVideo=(data)=>{
    setVideoID(data?.id)
    setPlayVideo(true)

  }

  const hour = parseInt(Number(data?.runtime) / 60);
  const minute = Number(data?.runtime) % 60;
  const duration = [hour, minute];

  // !displaying error message
  if (errorData) {
    return <ErrorDisplay errorMessage={errorData} />;
  }
  if (errorCast) {
    return <ErrorDisplay errorMessage={errorCast} />;
  }
  if (recomError) {
    return <ErrorDisplay errorMessage={recomError} />;
  }

  return (
    <div className="pb-16">
      <div className="w-full relative h-[300px] hidden lg:block detail">
        <div className="w-full h-full relative ">
          <img
            src={bannerURL + data.backdrop_path}
            alt={data?.title || data.name}
            className="h-full w-full object-fit"
          />
        </div>
        <div className="absolute h-full w-full top-0 bg-gradient-to-t from-neutral-900 to-transparent "></div>
      </div>

      <div className="container mx-auto px-4 pt-16 lg:py-0 flex flex-col my-2 gap-2 lg:flex-row lg:gap-8">
        <div className="relative lg:-mt-32 mx-auto w-fit lg:mx-0 ">
          <img
            src={bannerURL + data.poster_path}
            alt={data?.title || data.name}
            className="min-w-60 h-80 object-cover rounded-md"
          />
          <button
            className="bg-white text-black font-bold  mt-2 py-2 px-4 w-full rounded-md mb-4   hover:bg-gradient-to-r from-red-500 to-orange-500 transition-all hover:scale-105  "
            onClick={() => {handlePlayVideo(data)
            }}
          >
            Play Now
          </button>
        </div>

        <hr className="my-3 border-1 border-neutral-600" />

        <div>
          {/* heading and sub-heading */}
          <h2 className="text-xl font-bold lg:text-4xl text-white">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400 mt-0">{data?.tagline}</p>

          {/* rating views duration */}
          {/* <hr className="my-3"/> */}
          <hr className="my-3 border-1 border-neutral-600" />

          <div className="flex items-center gap-2 lg:gap-3  mt-3 text-center">
            <p>{`Rating: ${
              Number(data?.vote_average).toFixed(1) || "NA"
            }⭐`}</p>
            <span>|</span>
            <p>{`Views: ${data?.vote_count}`}</p>
            <span>|</span>
            <p>
              {duration[0] && duration[1]
                ? `Duration: ${duration[0]}hr${parseInt(duration[1], 10)}m`
                : `Duration: NA`}
            </p>
          </div>

          {/* <hr className="my-3" /> */}
          <hr className="my-3 border-1 border-neutral-600" />

          {/* overview */}
          <div>
            <h3 className=" text-xl lg:text-2xl font-bold text-white">
              Overview
            </h3>
            <p className="mt-1">{data?.overview}</p>
          </div>

          {/* <hr className="my-3" /> */}
          <hr className="my-3 border-1 border-neutral-600" />

          <div className="  flex items-center gap-3  text-center">
            <p>{`Status: ${data?.status}`}</p>
            <span>|</span>
            <p>{`Released Date: ${moment(data.release_date).format(
              "MMMM D YYYY"
            )}`}</p>
            <span>|</span>
            <p>{`Revenue: 💲${(Number(data?.revenue) / 1000000).toFixed(
              1
            )} million`}</p>
          </div>

          <hr className="my-3 border-1 border-neutral-600" />

          {/* Star CAst */}
          <h2 className="text-lg lg:text-2xl mb-3 text-white font-bold">
            Star Cast :
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-6">
            {castDetails?.cast?.map((star, index) => {
              return (
                <div key={star?.name + index} className="">
                  <div>
                    {/* ternary operator if img not available */}
                    {star?.profile_path ? (
                      <img
                        src={bannerURL + star?.profile_path}
                        alt={star?.name}
                        className="w-24  min-w-24 min-h-24 h-24 rounded-full"
                      />
                    ) : (
                      <div className="h-24 w-24 rounded-full flex justify-center items-center  border-red-700 border-2 ">
                        <span className="text-sm">IMG NA</span>
                      </div>
                    )}
                  </div>
                  <p className="font-bold text-center ">{star?.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <HorizontalScroll
          data={recommendation}
          heading={"Recommendations"}
          trending={false}
          media_type={params?.explore}
        />
      </div>
      {/* video popup */}
      <div>
        {playVideo && (
          <VideoPlay
            media_type={params?.explore}
            videoID={videoID}
            close={() => {
              setPlayVideo(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
