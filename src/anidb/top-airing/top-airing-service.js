// Most Airing
import axios from "axios";

const TOP_AIRING_API = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&page=1&limit=5'

export const findTopAiringAnime = async () => {
    const response = await axios.get(`${TOP_AIRING_API}`)
    return response.data.results
}