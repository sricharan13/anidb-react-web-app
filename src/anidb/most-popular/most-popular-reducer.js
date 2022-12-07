import {createSlice} from "@reduxjs/toolkit";
import {findMostPopularAnimeThunk} from "../most-popular/most-popular-thunks";

const initialState = {
    mostPopular: []
}

const mostPopularReducer = createSlice(
    {
        name: 'mostpopular',
        initialState,
        extraReducers: {
            [findMostPopularAnimeThunk.fulfilled]: (state, action) => {
                state.mostPopular = action.payload
            }
        }
    }
)
export default mostPopularReducer.reducer