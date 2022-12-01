import {createSlice} from "@reduxjs/toolkit";
import {findRecentAnimeEpisodesThunk, findTrendingAnimeThunk} from "../home/home-thunks";

const initialState = {
    recentEp: [],
    trending: []
}

const homeReducer = createSlice(
    {
        name: 'home',
        initialState,
        extraReducers: {
            [findRecentAnimeEpisodesThunk.fulfilled]: (state, action) => {
                state.recentEp = action.payload
            },
            [findTrendingAnimeThunk.fulfilled]: (state, action) => {
                state.trending = action.payload
            }
        }
    }
)

export default homeReducer.reducer