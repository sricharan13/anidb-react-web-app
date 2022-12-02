import { createSlice } from "@reduxjs/toolkit";
import cardArray from "../data/cards.json";

import {
    findMostPopularEpisodesThunk,
    findMostAnticipatedAnimeEpisodesThunk,
    findTopAiringAnimeEpisodesThunk
} from "../recommended-lists/card-thunks";

const initialState = {
    mostPop: [],
    mostAnticipated: [],
    topAiring: []
}

const cardReducer = createSlice({
                                 name: "card",
                                 initialState,
                                 extraReducers: {
                                     [findMostPopularEpisodesThunk.fulfilled]: (state, action) => {
                                         state.mostPop = action.payload
                                     },
                                     [findMostAnticipatedAnimeEpisodesThunk.fulfilled]: (state, action) => {
                                         state.mostAnticipated = action.payload
                                     },
                                     [findTopAiringAnimeEpisodesThunk.fulfilled]: (state, action) => {
                                         state.topAiring = action.payload
                                     }
                                 }
                             });

export default cardReducer.reducer;