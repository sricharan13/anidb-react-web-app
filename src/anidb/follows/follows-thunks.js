import {createAsyncThunk} from "@reduxjs/toolkit";
import {findFollowing, findFollowers, followUser, findIfFollowing} from "./follows-service";

export const followUserThunk = createAsyncThunk(
    'followUser',
    async (follow) => await followUser(follow)
)

export const findFollowersThunk = createAsyncThunk(
    'findFollowers',
    async (userId) => await findFollowers(userId)
)

export const findFollowingThunk = createAsyncThunk(
    'findFollowing',
    async (follower) => await findFollowing(follower)
)

export const findIfFollowingThunk = createAsyncThunk(
    'findIfFollowing',
    async (followed) => await findIfFollowing(followed)
)

