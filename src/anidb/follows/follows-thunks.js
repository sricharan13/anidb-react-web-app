import {createAsyncThunk} from "@reduxjs/toolkit";
import {findFollowing, findFollowers, followUser, findIfFollowing, unFollowUser} from "./follows-service";

export const followUserThunk = createAsyncThunk(
    'followUser',
    async (follow) => await followUser(follow)
)

export const unFollowUserThunk = createAsyncThunk(
    'unFollowUser',
    async (unFollow) => await unFollowUser(unFollow)
)

export const findFollowersThunk = createAsyncThunk(
    'findFollowers',
    async (followed) => await findFollowers(followed)
)

export const findFollowingThunk = createAsyncThunk(
    'findFollowing',
    async (follower) => await findFollowing(follower)
)

export const findIfFollowingThunk = createAsyncThunk(
    'findIfFollowing',
    async (followed) => await findIfFollowing(followed)
)

