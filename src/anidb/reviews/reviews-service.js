import axios from "axios";

const REVIEWS_API = 'http://localhost:4000/api/reviews'

// const api = axios.create(
//     {
//         withCredentials: true,
//         origin: 'http://localhost:3000'
//     }
// );

export const createReview = async (review) => {
    const response = await axios.post(REVIEWS_API, review)
    return response.data
}