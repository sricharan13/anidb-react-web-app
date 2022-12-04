import {createSlice} from "@reduxjs/toolkit";
import {
    findFollowersThunk,
    findFollowingThunk,
    findIfFollowingThunk,
    followUserThunk,
    unFollowUserThunk
} from "./follows-thunks";

const followsReducer = createSlice({
    name: 'follows',
    initialState: {
        following: [],
        followers: [],
        ifFollowing: false
    },
    extraReducers: {
        [followUserThunk.fulfilled]: (state, {payload}) => {
            // state.followers.push(payload)
            state.ifFollowing = true
        },
        [unFollowUserThunk.fulfilled]: (state, {payload}) => {
            state.ifFollowing = false
        },
        [findFollowersThunk.fulfilled]: (state, {payload}) => {
            state.followers = payload
        },
        [findFollowingThunk.fulfilled]: (state, {payload}) => {
            state.following = payload
        },
        [findIfFollowingThunk.fulfilled]: (state, {payload}) => {
            state.ifFollowing = payload
        },
    }
})

export default followsReducer.reducer