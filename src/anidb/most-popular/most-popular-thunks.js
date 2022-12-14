import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMostPopularAnime} from "./most-popular-service";


export const findMostPopularAnimeThunk = createAsyncThunk(
    'findMostPopularAnime',
    () => findMostPopularAnime()
)