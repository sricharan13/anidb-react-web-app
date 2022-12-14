import axios from "axios";

const REVIEWS_API = 'http://localhost:4000/api/reviews'
const ANIME_REVIEWS_API = 'http://localhost:4000/api/anime'
const USER_REVIEWS_API = 'http://localhost:4000/api/users'

const api = axios.create(
    {
        withCredentials: true,
    }
);

export const createReview = async (review) => {
    const response = await api.post(REVIEWS_API, review)
    return response.data
}

export const deleteReview = async (rid) => {
    const response = await api.delete(`${REVIEWS_API}/${rid}`)
    return response.data
}

export const findReviewsByAnime = async (animeId) => {
    const response = await api.get(`${ANIME_REVIEWS_API}/${animeId}/reviews`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${USER_REVIEWS_API}/${author}/reviews`)
    return response.data
}