import {createSlice} from "@reduxjs/toolkit";
import {findFollowersThunk, findFollowingThunk, findIfFollowingThunk, followUserThunk} from "./follows-thunks";

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
        [findFollowersThunk.fulfilled]: (state, {payload}) => {
            state.followers = payload
            // console.log(state.followers)
        },
        [findFollowingThunk.fulfilled]: (state, {payload}) => {
            state.following = payload
            // console.log(state.following)
        },
        [findIfFollowingThunk.fulfilled]: (state, {payload}) => {
            state.ifFollowing = payload
        },
    }
})

export default followsReducer.reducer