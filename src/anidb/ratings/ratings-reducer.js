import {createSlice} from "@reduxjs/toolkit";
import {
    createRatingThunk,
    findRatingsByUserThunk,
    findRatingForAnimeThunk,
    updateRatingThunk
} from "./ratings-thunks";

const ratingsReducer = createSlice({
        name: 'ratings',
        initialState: {
            animeRating: [],
            userRatings: []
        },
        extraReducers: {
            [createRatingThunk.fulfilled]: (state, action) => {
                state.animeRating = action.payload
            },
            [updateRatingThunk.fulfilled]: (state, action) => {
                state.animeRating = action.payload
                // console.log(state.animeRating)
            },
            [findRatingForAnimeThunk.fulfilled]: (state, action) => {
                // console.log(action.payload)
                state.animeRating = action.payload
                // console.log(state.animeRating)
            },
            [findRatingsByUserThunk.fulfilled]: (state, action) => {
                state.userRatings = action.payload
            }
        }

    }
)

export default ratingsReducer.reducer