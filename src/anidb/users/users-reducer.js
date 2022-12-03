import {createSlice} from "@reduxjs/toolkit";
import {
    findAllUsersThunk, findUserByIdThunk,
    findUsersListThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk, updateCurrentUserThunk
} from "./users-thunk";
import {updateCurrentUser} from "./users-service";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        currentUser: null,
        publicProfile: null
    },
    extraReducers: {
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        [updateCurrentUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export default usersReducer.reducer