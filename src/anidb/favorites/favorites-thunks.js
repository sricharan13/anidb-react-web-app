import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    addToFavorites,
    findFavoritesByUser,
    isFavorite,
    removeFromFavorites
} from "./favorites-service";

export const addToFavoritesThunk = createAsyncThunk(
    'addToFavorites',
    (favorite) => addToFavorites(favorite)
)

export const removeFromFavoritesThunk = createAsyncThunk(
    'removeFromFavorites',
    (animeId) => removeFromFavorites(animeId)
)

export const findFavoritesByUserThunk = createAsyncThunk(
    'findFavoritesByUser',
    (userId) => findFavoritesByUser(userId)
)

export const isFavoriteThunk = createAsyncThunk(
    'isFavorite',
    (animeId) => isFavorite(animeId)
)