import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axios";
import Card from "../components/Card";
import ErrorDisplay from "../components/ErrorDisplay";

function Search() {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const query = location?.search?.slice(3);

  const fetchSearch = async () => {
    try {
      const response = await axiosInstance.get("/search/multi", {
        params: {
          query: location?.search?.slice(3),
          page: pageNo,
        },
      });

      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (query) {
      setPageNo(1);
      setData([]);
      fetchSearch();
    }
  }, [query]);

  useEffect(() => {
    if (query) {
      fetchSearch();
    }
  }, [pageNo]);

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
  if (errorMessage) {
    return <ErrorDisplay errorMessage={errorMessage} />;
  }


  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* input field for mobile view */}
        <div className="lg:hidden my-2 mx-1 top-[70px] sticky z-30">
          <input
            type="text"
            placeholder="Search here..."
            onChange={(e) => {
              navigate(`/search/?q=${e.target.value}`);
              inputRef.current.value = e.target.value;
            }}
            value={query.split('%20').join(' ')}
            className="px-3 py-1 text-lg w-full text-white rounded-md bg-neutral-800 border-2 border-gray-700"
          />
        </div>

        {/* displaying No results found if data.length== */}
        {data.length == 0 ? (
          <div className=" flex justify-center items-center w-full h-[70vh] lg:h-screen ">
            <p className="  text-white text-xl capitalize p-5 bg-neutral-800 rounded-md">
              No results found...🦆
            </p>
          </div>
        ) : (
          <h3 className="capitalize text-lg font-semibold lg:text-2xl my-4">
            Search results
          </h3>
        )}

        <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
          {data.map((searchData, index) => {
            return (
              <Card
                key={searchData.id + "search" + index}
                item={searchData}
                trending={false}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
