import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers, register, login, logout, profile, findUsersList, findUserById, updateCurrentUser} from "./users-service";

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => await findUserById(uid)
)

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)
export const findUsersListThunk = createAsyncThunk(
    'findUsersList',
    async () => await findUsersList()
)
export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)
export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)
export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)
export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)
export const updateCurrentUserThunk = createAsyncThunk(
    'updateCurrentUser',
    async  (user) => await updateCurrentUser(user)
)
