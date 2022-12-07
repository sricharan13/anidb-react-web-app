// Most Popular API
import axios from "axios";

const MOST_POPULAR_API = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&page=1&limit=5'

export const findMostPopularAnime = async  () => {
    const response = await axios.get(`${MOST_POPULAR_API}`)
    return response.data.results;
}