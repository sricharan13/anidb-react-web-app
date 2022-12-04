import axios from "axios";
const FOLLOWS_API = 'http://localhost:4000/follows'
// const USERS_API = 'http://localhost:4000/users'

const api = axios.create(
    {
        withCredentials: true
    });

export const followUser = async (follow) => {
    const response = await api.post(`${FOLLOWS_API}`, follow)
    return response.data
}

export const findFollowers = async (userId) => {
    const response = await api.get(`${FOLLOWS_API}/${userId}/followers`)
    return response.data
}

export const findFollowing = async (follower) => {
    const response = await api.get(`${FOLLOWS_API}/${follower}/following`)
    return response.data
}

export const findIfFollowing = async (followed) => {
    const response = await api.get(`${FOLLOWS_API}/${followed}/if-following`)
    return response.data
}

