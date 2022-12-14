import {createSlice} from "@reduxjs/toolkit";
import {
    createReviewThunk,
    findReviewsByAnimeThunk,
    findReviewsByAuthorThunk
} from "./reviews-thunks";

const reviewsReducer = createSlice(
    {
        name: 'reviews',
        initialState: {
            reviews: []
        },
        extraReducers: {
            [createReviewThunk.fulfilled]: (state, action) => {
                state.reviews.push(action.payload)
            },
            [findReviewsByAnimeThunk.fulfilled]: (state, action) => {
                state.reviews = action.payload
            },
            [findReviewsByAuthorThunk.fulfilled]: (state, action) => {
                state.reviews = action.payload
            }
        }
    }
)

export default reviewsReducer.reducer