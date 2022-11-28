import {createSlice} from "@reduxjs/toolkit";
import {findBySearchTermThunk} from "../home/search-thunks";
// import {findMovieBySearchTerm} from "./omdb-service";

const initialState = {
    anime: [],
    loading: false
}

const searchReducer = createSlice({
                                    name: 'anisearch',
                                    initialState,
                                    extraReducers: {
                                        [findBySearchTermThunk.fulfilled]: (state, action) => {
                                            state.anime = action.payload
                                        }
                                    }
                                })

export default searchReducer.reducer