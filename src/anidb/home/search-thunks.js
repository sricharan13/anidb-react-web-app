import {createAsyncThunk} from "@reduxjs/toolkit";
import {findByAnimeId, findBySearchTerm} from "./search-service";

export const findBySearchTermThunk = createAsyncThunk(
    'findBySearchTerm',
    (term) => findBySearchTerm(term)
)

export const findByAnimeIdThunk = createAsyncThunk(
    'findByAnimeId',
    (animeId) => findByAnimeId(animeId)
)