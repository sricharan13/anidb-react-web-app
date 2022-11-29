import axios from "axios";

const SEARCH_URL = 'https://api.consumet.org/anime/animepahe/'


export const findBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    return response.data.results
}