import axios from "axios";

const MOST_POPULAR_API = 'https://api.consumet.org/meta/anilist/popular'

export const findMostPopularAnime = async  () => {
    const response = await axios.get(MOST_POPULAR_API)
    return response.data.results;
}