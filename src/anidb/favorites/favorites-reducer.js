import {createSlice} from "@reduxjs/toolkit";
import {addToFavoritesThunk, findFavoritesByUserThunk} from "./favorites-thunks";

const favoritesReducer = createSlice(
    {
        name: 'favorites',
        initialState: {
            favorites: []
        },
        extraReducers: {
            [addToFavoritesThunk.fulfilled]: (state, action) => {
                state.favorites.push(action.payload)
            },
            [findFavoritesByUserThunk.fulfilled]: (state, action) => {
                state.favorites = action.payload
            }
        }
    }
)

export default favoritesReducer.reducer