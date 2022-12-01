import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk} from "./reviews-thunks";

const reviewsReducer = createSlice(
    {
        name: 'reviews',
        initialState: {
            reviews: []
        },
        extraReducers: {
            [createReviewThunk.fulfilled]: (state, action) => {
                state.reviews.push(action.payload)
            }
        }
    }
)

export default reviewsReducer.reducer