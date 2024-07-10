
import {configureStore} from '@reduxjs/toolkit'
import fetchStatusSlice from './FetchStatus'
import movieSlice from './MovieSlice'


const store=configureStore({
  reducer:{
      movies:movieSlice.reducer,
      fetchStatus:fetchStatusSlice.reducer
  }
})

export default store