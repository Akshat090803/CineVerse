import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
  name:'movies',
  initialState:{
    bannerData:[],
    bannerURL:'https://image.tmdb.org/t/p/original'

  },
  reducers:{
    addInitialMovies:(store,action)=>{
        store.bannerData=action.payload
    },
    addImageURL:(store,action)=>{

     store.bannerURL=action.payload
     
    }
  }
})

export default movieSlice
export const movieSliceActions=movieSlice.actions