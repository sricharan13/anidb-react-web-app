import axios from "axios";

const RECENT_EP_API = 'https://api.consumet.org/meta/anilist/recent-episodes'
const TRENDING_API = 'https://api.consumet.org/meta/anilist/trending'

export const findRecentAnimeEpisodes = async () => {
    const response = await axios.get(`${RECENT_EP_API}`)
    return response.data.results
}

export const findTrendingAnime = async () => {
    const response = await axios.get(`${TRENDING_API}`)
    return response.data.results
}