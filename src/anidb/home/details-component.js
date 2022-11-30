import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findByAnimeIdThunk} from "./search-thunks";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import {createReviewThunk} from "../reviews/reviews-thunks";
import {responsive} from "../responsive";

const DetailsComponent = () => {
    const {animeId} = useParams()
    const {details} = useSelector((state) => state.anisearch)
    const {currentUser} = useSelector((state) => state.users)
    // console.log(currentUser)
    const [review, setReview] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findByAnimeIdThunk(animeId))
    }, [])
    // console.log(details)
    const handleReview= () => {
        dispatch(createReviewThunk(
            {
                review,
                author: currentUser._id
            }
        ))
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
        // <pre> {JSON.stringify(details)} </pre>
            <>
                {
                    details &&
                    <div>
                        <div className="border-dark border-bottom">
                            <div className="fw-bold">
                                <span className="display-5 fw-bold"> {details.title.english ? details.title.english: details.title.romaji} </span>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-8">
                                <div> <span className="fw-bold mb-2"> Synopsis </span> </div>
                                {details.description.replaceAll(/( |<([^>]+)>)/ig, "")}
                            </div>
                            <div className="col-4 mb-2">
                                <img src={`${details.image}`} alt="Unable to render" width={200} height={275} className="rounded float-end me-2"/>
                                <button type="button" className="btn btn-primary rounded-pill mt-2 float-end me-4"
                                        onClick={handleAddFavorite}>Add to Favorites</button>
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

                        <div className="mt-2 ">
                            <span className="display-6 border-light border-bottom"> Characters </span>
                            <div className="mt-2">
                                <Carousel responsive={responsive} autoPlay={true} infinite={true}>{
                                    details.characters.map((character) => (
                                        <div style={{width: "15rem"}} >
                                            <div className={"text-center"}>
                                                <img src={`${character.image}`} height={200} width={128}/>
                                                <div>{character.name.full}</div>
                                                <div>({character.role})</div>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>

                        <div className="mt-2 ">
                            <span className="display-6 border-light border-bottom"> Suggested Anime </span>
                            <div className="mt-2">
                                <Carousel responsive={responsive} autoPlay={true} infinite={true}>{
                                    details.recommendations.map((recommendation) => (
                                        <div style={{width: "15rem"}} >
                                            <div className={"text-center"}>
                                                <img src={`${recommendation.image}`} height={200} width={128}/>
                                                <div>{recommendation.title.english ? recommendation.title.english: recommendation.title.romaji}</div>
                                                <div>Rating: {recommendation.rating}</div>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>

                        <div className="mt-2">
                            <span className="display-6 border-light border-bottom"> Reviews </span>
                            <div className="form-group mt-2">
                        <textarea className="form-control" rows="3" placeholder="Post your review here..."
                                  onChange={(e) => setReview(e.target.value)}></textarea>
                                <button type="button" className="btn btn-primary rounded-pill mt-2 float-end"
                                        onClick={handleReview}>Post</button>
                            </div>
                        </div>
                    </div>
                }
            </>
    )
}

export default DetailsComponent