import axios from "axios";

const SEARCH_URL = 'https://api.myanimelist.net/v2/anime/10357?fields=rank,mean,alternative_titles'


export const findBySearchTerm = async (term) => {
    const headers = {
        'X-MAL-CLIENT-ID' : '5c5fe92a1d251fe6c13da84a7ca24b79'
    }
    const response = await axios.get(`${SEARCH_URL}${term}`)
    console.log(response.data)
    return response.data.Search
}