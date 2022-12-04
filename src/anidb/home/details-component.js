import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findByAnimeIdThunk} from "./search-thunks";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {createReviewThunk, findReviewsByAnimeThunk} from "../reviews/reviews-thunks";
import {responsive} from "../responsive";
import {Link} from "react-router-dom";
import {
    addToFavoritesThunk,
    isFavoriteThunk,
    removeFromFavoritesThunk
} from "../favorites/favorites-thunks";
import {Accordion} from "react-bootstrap";
import {
    createRatingThunk,
    findRatingForAnimeThunk,
    updateRatingThunk
} from "../ratings/ratings-thunks";

const DetailsComponent = () => {
    const {animeId} = useParams()
    const {details} = useSelector((state) => state.anisearch)
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const {isFav} = useSelector((state) => state.favorites)
    // console.log(isFav)
    const {animeRating} = useSelector((state) => state.ratings)
    // console.log(animeRating.length)
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(50)
    const dispatch = useDispatch()
    useEffect(() => {
        // console.log("Dispatching")
        dispatch(findByAnimeIdThunk(animeId))
        dispatch(findReviewsByAnimeThunk(animeId))
        if (currentUser) {
            // console.log("dispatching")
            dispatch(isFavoriteThunk(animeId))
            dispatch(findRatingForAnimeThunk(animeId))
            setRating(animeRating.length === 1 ? animeRating[0].rating : 50)
        }
    }, [animeId, isFav, JSON.stringify(reviews), JSON.stringify(animeRating)])
    const handleReview = () => {
        dispatch(createReviewThunk(
            {
                review: review,
                animeId: animeId,
                animeTitle: details.title.english ? details.title.english: details.title.romaji,
            }
        ))
    }
    const handleRating = () => {
        dispatch(createRatingThunk(
            {
                rating: rating,
                animeId: animeId,
                animeTitle: details.title.english ? details.title.english: details.title.romaji,
            }
        ))
    }
    const handleUpdateRating = () => {
        dispatch(updateRatingThunk(
            {
                rating: rating,
                animeId: animeId
            }
        ))
    }
    const handleAddFavorite = () => {
        dispatch(addToFavoritesThunk(
            {
                animeId: animeId,
                animeTitle: details.title.english ? details.title.english: details.title.romaji,
                animeImg: details.image,
            }
        ))
    }
    const handleRemoveFavorite = () => {
        dispatch(removeFromFavoritesThunk(animeId))
    }
    return (
        <>
            {
                details &&
                <div>
                    <div className="border-dark border-bottom">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="display-5 fw-bold"> {details.title.english ? details.title.english: details.title.romaji} </span>
                            {
                                currentUser &&
                                <div className="text-center">
                                    <div className="d-flex">
                                        <input type="range" name="rating" value={rating} className="form-range" min="0" max="100" step="1" onChange={(e) => setRating(e.target.valueAsNumber)}/>
                                        <span className="ms-1"><strong>{rating}</strong></span>
                                    </div>
                                    {
                                        animeRating.length === 0 &&
                                        <button type="button" className="btn btn-sm btn-primary rounded-pill" onClick={handleRating}>
                                            Rate Anime
                                        </button>
                                    }
                                    {
                                        animeRating && animeRating.length === 1 &&
                                        <button type="button" className="btn btn-sm btn-outline-primary rounded-pill" onClick={handleUpdateRating}>
                                            Update Rating
                                        </button>
                                    }
                                </div>
                            }
                        </div>
                        <div className="row mt-2">
                            <div className="col-8">
                                <div> <span className="fw-bold mb-2"> Synopsis </span> </div>
                                {details.description.replaceAll(/( |<([^>]+)>)/ig, "")}
                            </div>
                            <div className="col-4 mb-2">
                                <img src={`${details.image}`} alt="Unable to render" width={200} height={275} className="rounded float-end me-2"/>
                                {
                                    currentUser && !isFav &&
                                    <button type="button" className="btn btn-primary rounded-pill mt-2 float-end me-4"
                                            onClick={handleAddFavorite}>Add to Favorites</button>
                                }
                                {
                                    currentUser && isFav &&
                                    <button type="button" className="btn btn-outline-danger rounded-pill mt-2 float-end me-2"
                                            onClick={handleRemoveFavorite}>Remove from Favorites</button>
                                }
                            </div>
                        </div>
                        <div className="mt-2 mb-2">
                            <span className="fw-bold mb-2"> Aired: </span> <span className="text-capitalize"> {details.season}, {details.releaseDate} </span> <br/>
                            <span className="fw-bold mb-2"> Status: </span> <span className="text-capitalize"> {details.status} </span> <br/>
                            <span className="fw-bold mb-2"> Rating: </span> <span className="text-capitalize"> {details.rating} </span> <br/>
                            <span className="fw-bold mb-2"> Genre(s): </span> <span className="text-capitalize"> {details.genres.toString()} </span> <br/>
                            <span className="fw-bold mb-2"> Type: </span> <span className="text-capitalize"> {details.type} </span> <br/>
                            <span className="fw-bold mb-2"> Number of Episodes: </span> <span> {details.totalEpisodes} </span> <br/>
                            <span className="fw-bold mb-2"> Episode Duration: </span> <span> {details.duration} min. per ep. </span> <br/>
                            <span className="fw-bold mb-2"> Studio(s): </span> <span> {details.studios.toString()} </span> <br/>
                        </div>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><strong>Characters</strong></Accordion.Header>
                                <Accordion.Body>
                                    <Carousel responsive={responsive} autoPlay={true} infinite={true}>{
                                        details.characters.map((character) => (
                                            <div style={{width: "10rem"}} >
                                                <div className={"text-center"}>
                                                    <img src={`${character.image}`} height={200} width={128}/>
                                                    <div>{character.name.full}</div>
                                                    <div>({character.role})</div>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><strong>Suggested Anime</strong></Accordion.Header>
                                <Accordion.Body>
                                    <Carousel responsive={responsive} autoPlay={true} infinite={true}>{
                                        details.recommendations.map((recommendation) => (
                                            <Link to={`/anime/${recommendation.id}`} className="text-decoration-none text-dark">
                                                <div style={{width: "10rem"}} >
                                                    <div className={"text-center"}>
                                                        <img src={`${recommendation.image}`} height={200} width={128}/>
                                                        <div>{recommendation.title.english ? recommendation.title.english: recommendation.title.romaji}</div>
                                                        <div>Rating: {recommendation.rating}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </Carousel>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="mt-2">
                            <span className="display-6 border-light border-bottom"> Reviews </span>
                            <div>{currentUser &&
                                  <div className="form-group mt-2 row">
                                    <textarea className="col-12" rows="3" placeholder="Post your review here..."
                                              onChange={(e) => setReview(e.target.value)}></textarea>
                                      <button type="button" className="btn col-2 btn-primary rounded-pill mt-2" onClick={handleReview}>Post</button>
                                  </div>
                            }
                            </div>
                            <div className="mt-2">
                                <ul className="list-group">
                                    {
                                        reviews.map((r) =>
                                                        <li className="list-group-item">
                                                            <div className="fw-bold">
                                                                <Link to={`/public-profile/${r.author._id}`} className="text-decoration-none">
                                                                    {r.author.username}
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                {r.review}
                                                            </div>
                                                        </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DetailsComponent