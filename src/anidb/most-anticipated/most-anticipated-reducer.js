import {createSlice} from "@reduxjs/toolkit";
import {findMostAnticipatedAnimeThunk} from "./most-anticipated-thunks";


const initialState = {
    mostAnticipated: []
}

const mostAnticipatedReducer = createSlice(
    {
        name: 'mostanticipated',
        initialState,
        extraReducers: {
            [findMostAnticipatedAnimeThunk.fulfilled]: (state, action) => {
                state.mostAnticipated = action.payload
            }
        }
    }
)
export default mostAnticipatedReducer.reducer;