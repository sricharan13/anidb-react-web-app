import {createSlice} from "@reduxjs/toolkit";
import {
    createReviewThunk,
    deleteReviewThunk,
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
            [deleteReviewThunk.fulfilled]: (state, {payload}) => {
                state.loading = false
                state.reviews = state.reviews.filter(r => r.rid !== payload)
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