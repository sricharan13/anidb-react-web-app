import {createSlice} from "@reduxjs/toolkit";
import {
    findByAnimeGenreThunk,
    findRecentAnimeEpisodesThunk,
    findTrendingAnimeThunk
} from "../home/home-thunks";

const initialState = {
    recentEp: [],
    trending: [],
    byGenre: []
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
            },
            [findByAnimeGenreThunk.fulfilled]: (state, action) => {
                state.byGenre = action.payload
            }
        }
    }
)

export default homeReducer.reducer