import {createSlice} from "@reduxjs/toolkit";
import {findByAnimeIdThunk, findBySearchTermThunk} from "../home/search-thunks";

const initialState = {
    anime: {},
    details: {},
    loading: false
}

const searchReducer = createSlice({
                                    name: 'anisearch',
                                    initialState,
                                    extraReducers: {
                                        [findBySearchTermThunk.fulfilled]: (state, action) => {
                                            state.anime = action.payload
                                        },
                                        [findByAnimeIdThunk.fulfilled]: (state, action) => {
                                            state.details = action.payload
                                        }
                                    }
                                })

export default searchReducer.reducer