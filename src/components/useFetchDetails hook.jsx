import { useEffect, useState } from "react";
import axiosInstance from "../axios/axios";

function useFetchDetails(endpoint){

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("");
  const [errorMessage,setErrorMessage]=useState('')

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(endpoint);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message)
    }
  };

  useEffect(() => {
    fetchData(endpoint);
  }, [endpoint]);

  return { data, loading,errorMessage };
}
export default useFetchDetails