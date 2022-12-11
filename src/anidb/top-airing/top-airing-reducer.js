import {createSlice} from "@reduxjs/toolkit";
import {findTopAiringAnimeThunk} from "./top-airing-thunks";

const initialState = {
    topAiring: []
}

const topAiringReducer = createSlice(
    {
        name: 'topairing',
        initialState,
        extraReducers: {
            [findTopAiringAnimeThunk.fulfilled]: (state, action) => {
                state.topAiring = action.payload
            }
        }
    }
)
export default topAiringReducer.reducer