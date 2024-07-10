import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchStatusActions } from '../store/FetchStatus'
import { movieSliceActions } from '../store/MovieSlice'
import axiosInstance from "../axios/axios"



function FetchStatus(){

  const fetchStatus=useSelector(store=>store.fetchStatus)
  let dispatch=useDispatch()
  

  useEffect(()=>{
    
    if(fetchStatus.fetchDone){ return}
     
    dispatch(fetchStatusActions.markFetchingStarted())
   
    const controller=new AbortController
    const signal=controller.signal

    axiosInstance.get('/trending/all/week').
    then(res=>{
     
      dispatch(movieSliceActions.addInitialMovies(res.data.results))
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingEnded());
      }).catch((err)=>console.log(err))
 

    // for configuration api
    // axiosInstance.get('/configuration').
    // then(res=>{
    
    //   dispatch(movieSliceActions.addImageURL(res.data.images.secure_base_url+"original"))
    //   dispatch(fetchStatusActions.markFetchDone());
    //   dispatch(fetchStatusActions.markFetchingEnded());
     
    // }).catch((error)=>console.log(error))



      
    

    return ()=>{
      ()=>{controller.abort()}
    }
  },[fetchStatus])
 

}
export default FetchStatus