import { IoClose } from "react-icons/io5";
import useFetchDetails from "./useFetchDetails hook";
import ErrorDisplay from "./ErrorDisplay";
function VideoPlay({ close, videoID, media_type }) {

  const { data: videoData, errorMessage } = useFetchDetails(`/${media_type}/${videoID}/videos`);
  console.log(videoData.results?.[0]?.key);
  if (errorMessage) {
    return <ErrorDisplay errorMessage={errorMessage} />;
  }
  return (
    <section className="bg-neutral-700 fixed top-0 left-0 right-0 bottom-0 z-40 bg-opacity-50 flex justify-center items-center">
      <div className="bg-black w-full  max-h-[80vh] max-w-screen-lg aspect-video rounded relative group">
        <button
          className="absolute -top-6 -right-2 text-3xl hover:text-red-500"
          onClick={close}
        >
          <IoClose />
        </button>
        <iframe 
        className="w-full h-full"
         src={`https://www.youtube.com/embed/${videoData.results?.[0]?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  );
}
export default VideoPlay;

// <button className="absolute -z-10 group-hover:z-10 py-0 px-2  bg-white text-black top-0 right-0 hover:bg-red-700  " onClick={close}>X</button>
