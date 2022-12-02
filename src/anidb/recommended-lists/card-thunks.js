import {createAsyncThunk} from "@reduxjs/toolkit";

import {
    findMostAnticipated,
    findTopAiring,
    findMostPopular
} from "./card-service";

export const findMostAnticipatedAnimeEpisodesThunk = createAsyncThunk (
    'findMostAnticipated',
    () => findMostAnticipated()
)

export const findTopAiringAnimeEpisodesThunk = createAsyncThunk (
    'findTopAiring',
    () => findTopAiring()
)

export const findMostPopularEpisodesThunk = createAsyncThunk (
    'findMostPopular',
    () => findMostPopular()
)