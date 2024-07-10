
import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice=createSlice({
  name:'fetchStatus',
  initialState:{
    fetchDone:false,
    currentlyFetching:false
  },
  reducers:{
    markFetchDone:(store)=>{
            store.fetchDone=true
    },
    markFetchingStarted:(store)=>{
      store.currentlyFetching=true
    },
    markFetchingEnded:(store)=>{
      store.currentlyFetching=false
    }
  }
})

export default fetchStatusSlice
export const fetchStatusActions=fetchStatusSlice.actions