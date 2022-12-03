import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    createRating,
    findRatingForAnime, findRatingsByUser, updateRating,
} from "./ratings-service";

export const createRatingThunk = createAsyncThunk(
    'createRating',
    async (rating) => createRating(rating)
)

export const updateRatingThunk = createAsyncThunk(
    'updateRating',
    async (rating) => updateRating(rating)
)

export const findRatingForAnimeThunk = createAsyncThunk(
    'findRatingForAnime',
    async (animeId) => findRatingForAnime(animeId)
)

export const findRatingsByUserThunk = createAsyncThunk(
    'findRatingsByUser',
    async (user) => findRatingsByUser(user)
)