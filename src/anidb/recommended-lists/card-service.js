import axios from "axios";

// Top Airing API
const TOP_AIRING_API = 'http://api.consumet.org/meta/anilist/airing-schedule'
// Most Popular API
const MOST_POPULAR_API = 'http://api.consumet.org/meta/anilist/popular'
// Most Anticipated
const MOST_ANTICIPATED_API = 'http://api.consumet.org/meta/anilist/trending'

export const findTopAiring = async  () => {
    const response = await axios.get(`${TOP_AIRING_API}`)
    return response.data.results;
}

export const findMostPopular = async  () => {
    const response = await axios.get(`${MOST_POPULAR_API}`)
    return response.data.results;
}

export const findMostAnticipated = async () => {
    const response = await axios.get(`${MOST_ANTICIPATED_API}`)
    return response.data.results;
}



