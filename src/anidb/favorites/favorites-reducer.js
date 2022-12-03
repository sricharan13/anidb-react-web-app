import {createSlice} from "@reduxjs/toolkit";
import {
    addToFavoritesThunk,
    findFavoritesByUserThunk,
    isFavoriteThunk,
    removeFromFavoritesThunk
} from "./favorites-thunks";

const favoritesReducer = createSlice(
    {
        name: 'favorites',
        initialState: {
            favorites: [],
            isFav: false
        },
        extraReducers: {
            [addToFavoritesThunk.fulfilled]: (state, action) => {
                // state.favorites.push(action.payload)
                state.isFav = true
            },
            [removeFromFavoritesThunk.fulfilled]: (state, action) => {
                state.isFav = false
            },
            [findFavoritesByUserThunk.fulfilled]: (state, action) => {
                state.favorites = action.payload
            },
            [isFavoriteThunk.fulfilled]: (state, action) => {
                console.log(action.payload)
                if (action.payload.length) { state.isFav = true }
            }
        }
    }
)

export default favoritesReducer.reducer