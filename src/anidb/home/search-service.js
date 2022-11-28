import axios from "axios";

const SEARCH_URL = 'https://api.myanimelist.net/v2/anime?q='


export const findBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    console.log(response.data)
    return response.data.Search
}