import {createAsyncThunk} from "@reduxjs/toolkit";
import {findTopAiringAnime} from "./top-airing-service";


export const findTopAiringAnimeThunk = createAsyncThunk (
    'findTopAiringAnime',
    () => findTopAiringAnime()
)
