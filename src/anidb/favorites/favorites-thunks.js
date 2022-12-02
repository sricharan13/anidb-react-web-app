import {createAsyncThunk} from "@reduxjs/toolkit";
import {addToFavorites, findFavoritesByUser} from "./favorites-service";

export const addToFavoritesThunk = createAsyncThunk(
    'addToFavorites',
    (favorite) => addToFavorites(favorite)
)

export const findFavoritesByUserThunk = createAsyncThunk(
    'findFavoritesByUser',
    (userId) => findFavoritesByUser(userId)
)