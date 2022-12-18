import {createSlice} from "@reduxjs/toolkit";
import {
    deleteUserThunk,
    findAllUsersThunk, findUserByIdThunk,
    findUsersListThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk, updateCurrentUserThunk
} from "./users-thunk";
import {updateCurrentUser} from "./users-service";
import {throwError} from "react-multi-carousel/lib/utils";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        currentUser: null,
        loginError: false,
        registerError: false,
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
            state.registerError = false
        },
        [registerThunk.rejected]: (state, action) => {
            state.registerError = true
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loginError = false
        },
        [loginThunk.rejected]: (state, action) => {
            state.loginError = true
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        [updateCurrentUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        }
    }
})

export default usersReducer.reducer