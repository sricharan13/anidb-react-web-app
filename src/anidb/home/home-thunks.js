import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    findByAnimeGenre,
    findRecentAnimeEpisodes,
    findTrendingAnime
} from "./home-service";

export const findRecentAnimeEpisodesThunk = createAsyncThunk (
    'findRecentAnimeEpisodes',
    () => findRecentAnimeEpisodes()
)

export const findTrendingAnimeThunk = createAsyncThunk (
    'findTrendingAnime',
    () => findTrendingAnime()
)

export const findByAnimeGenreThunk = createAsyncThunk (
    'findByAnimeGenre',
    (genres) => findByAnimeGenre(genres)
)
