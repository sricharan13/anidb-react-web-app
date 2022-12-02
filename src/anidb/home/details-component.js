import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findByAnimeIdThunk} from "./search-thunks";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {createReviewThunk, findReviewsByAnimeThunk} from "../reviews/reviews-thunks";
import {responsive} from "../responsive";
import {Accordion} from "react-bootstrap";
import {Link} from "react-router-dom";


const DetailsComponent = () => {
    const {animeId} = useParams()
    const {details} = useSelector((state) => state.anisearch)
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(50)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findByAnimeIdThunk(animeId))
        dispatch(findReviewsByAnimeThunk(animeId))
    // }, [reviews])
    }, [])
    const handleReview = () => {
        dispatch(createReviewThunk(
            {
                review,
                animeId
            }
        ))
    }
    const handleRating = () => {

    }
    const handleAddFavorite = () => {
        // dispatch(addFavoriteThunk(
        //     {
        //         animeId,
        //         author: currentUser._id
        //     }
        // ))
    }
    return (
        <>
            {
                details &&
                <div>
                    <div className="border-dark border-bottom">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="display-5 fw-bold"> {details.title.english ? details.title.english: details.title.romaji} </span>
                            <div className="text-center">
                                <div className="d-flex">
                                    <input type="range" name="rating" value={rating} className="form-range" min="0" max="100" step="1" onChange={(e) => setRating(e.target.valueAsNumber)}/>
                                    <span className="ms-1"><strong>{rating}</strong></span>
                                </div>
                                <button type="button" className="btn btn-sm btn-primary rounded-pill" onClick={handleReview}>
                                    Rate Anime
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-8">
                            <div> <span className="fw-bold mb-2"> Synopsis </span> </div>
                            {details.description.replaceAll(/( |<([^>]+)>)/ig, " ")}
                        </div>
                        <div className="col-4 mb-2 text-center">
                            <img src={`${details.image}`} alt="Unable to render" width={200} height={275} className="rounded float-end"/>
                            <button type="button" className="btn btn-primary rounded-pill mt-2" onClick={handleAddFavorite}>
                                Add to Favorites
                            </button>
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
                                        <div style={{width: "10rem"}} >
                                            <div className={"text-center"}>
                                                <img src={`${recommendation.image}`} height={200} width={128}/>
                                                <div>{recommendation.title.english ? recommendation.title.english: recommendation.title.romaji}</div>
                                                <div>Rating: {recommendation.rating}</div>
                                            </div>
                                        </div>
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
                                                <Link to={`/profile/${r.author._id}`} className="text-decoration-none">
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
            }
        </>
    )
}

export default DetailsComponent