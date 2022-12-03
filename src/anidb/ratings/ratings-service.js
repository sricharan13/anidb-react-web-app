import axios from "axios";

const RATINGS_API = 'http://localhost:4000/api/ratings'
const ANIME_RATINGS_API = 'http://localhost:4000/api/anime'
const USER_RATINGS_API = 'http://localhost:4000/api/users'

const api = axios.create(
    {
        withCredentials: true,
    }
);

export const createRating = async (rating) => {
    const response = await api.post(RATINGS_API, rating)
    return response.data
}

export const findRatingForAnime = async (animeId) => {
    // const {animeId, userId} = ids
    // console.log(animeId)
    const response = await api.get(`${ANIME_RATINGS_API}/${animeId}/ratings`)
    return response.data
}

export const findRatingsByUser = async (userId) => {
    const response = await api.get(`${USER_RATINGS_API}/${userId}/ratings`)
    return response.data
}

