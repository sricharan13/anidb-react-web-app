import {createAsyncThunk} from "@reduxjs/toolkit";
import {findRecentAnimeEpisodes, findTrendingAnime} from "./home-service";

export const findRecentAnimeEpisodesThunk = createAsyncThunk (
    'findRecentAnimeEpisodes',
    () => findRecentAnimeEpisodes()
)

export const findTrendingAnimeThunk = createAsyncThunk (
    'findTrendingAnime',
    () => findTrendingAnime()
)