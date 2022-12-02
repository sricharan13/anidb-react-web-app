import axios from "axios";

const FAVS_API = 'http://localhost:4000/api/favorites'
const USER_FAVS_API = 'http://localhost:4000/api/users'

const api = axios.create(
    {
        withCredentials: true,
    }
);

export const addToFavorites = async (favorite) => {
    const response = await api.post(FAVS_API, favorite)
    return response.data
}

export const findFavoritesByUser = async (userId) => {
    const response = await api.get(`${USER_FAVS_API}/${userId}/favorites`)
    return response.data
}