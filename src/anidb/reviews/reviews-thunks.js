import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, findReviewsByAnime, findReviewsByAuthor, deleteReview} from "./reviews-service";

export const deleteReviewThunk = createAsyncThunk(
    'deleteReview',
    async (reviewId) => deleteReview(reviewId)
)


export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)

export const findReviewsByAnimeThunk = createAsyncThunk(
    'findReviewsByAnime',
    async (animeId) => findReviewsByAnime(animeId)
)

export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthor',
    async (author) => findReviewsByAuthor(author)
)