import axios from "axios";

const SEARCH_URL = 'https://api.consumet.org/meta/anilist/' // 'https://api.consumet.org/anime/enime/'
const INFO_URL = 'https://api.consumet.org/meta/anilist/info/' // 'https://api.consumet.org/anime/enime/info?id='


export const findBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    return response.data.results
}

export const findByAnimeId = async (animeId) => {
    const response = await axios.get(`${INFO_URL}${animeId}`)
    return response.data
}