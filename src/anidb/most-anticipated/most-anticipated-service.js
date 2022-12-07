import axios from "axios";

// Most Anticipated
const MOST_ANTICIPATED_API = 'https://api.jikan.moe/v4/top/anime?type=tv&filter=upcoming&page=1&limit=5'

export const findMostAnticipatedAnime = async () => {
    const response = await axios.get(`${MOST_ANTICIPATED_API}`)
    return response.data.results
}