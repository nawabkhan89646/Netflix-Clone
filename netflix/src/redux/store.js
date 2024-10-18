import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import searchReducer from './searchSlice'
const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        searchMovies:searchReducer
    },
})


export default store