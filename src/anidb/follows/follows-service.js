import axios from "axios";
const FOLLOWS_API = 'http://localhost:4000/follows'

const api = axios.create({withCredentials: true});

export const followUser = async (follow) => {
    console.log('follow service, posting request')
    const response = await api.post(`${FOLLOWS_API}`, follow)
    console.log('response received')
    return response.data
}

export const unFollowUser = async (unFollow) => {
    const response = await api.delete(`${FOLLOWS_API}`, unFollow)
    return response.data
}

export const findFollowers = async (followed) => {
    const response = await api.get(`${FOLLOWS_API}/${followed}/followers`)
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

