import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {findFollowersThunk, findFollowingThunk, findIfFollowingThunk, followUserThunk, unFollowUserThunk} from "../follows/follows-thunks";
import React, {useEffect} from "react";
import {findUserByIdThunk} from "./users-thunk";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";
import {Accordion} from "react-bootstrap";
import {findRatingsByUserThunk} from "../ratings/ratings-thunks";
import {findFavoritesByUserThunk} from "../favorites/favorites-thunks";

const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const {userRatings} = useSelector((state) => state.ratings)
    const {favorites} = useSelector((state) => state.favorites)
    const {followers, following} = useSelector((state) => state.follows)
    const {ifFollowing} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    const handleFollowBtn = () => {
        dispatch(followUserThunk({
            followed: uid
        }))
    }
    const handleUnFollowBtn = () => {
        dispatch(unFollowUserThunk({
            unFollowed: uid
        }))
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
        dispatch(findRatingsByUserThunk(uid))
        dispatch(findFavoritesByUserThunk(uid))
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
        dispatch(findIfFollowingThunk(uid))
    }, [uid, ifFollowing])
    return(
        <>
            <h3 className="text-center">Public Profile</h3>
            {publicProfile &&
                <>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div>
                            <h5>{publicProfile.username} &middot; {publicProfile.firstName} {publicProfile.lastName}</h5>
                        </div>
                        {currentUser && currentUser.accountType === "OTAKU" && publicProfile._id !== currentUser._id && ifFollowing && <button
                            onClick={handleUnFollowBtn}
                            className="btn btn-outline-danger btn-sm rounded-pill">
                            Unfollow
                        </button>
                        }
                        {currentUser && currentUser.accountType === "OTAKU" && publicProfile._id !== currentUser._id && !ifFollowing && <button
                            onClick={handleFollowBtn}
                            className="btn btn-primary btn-sm rounded-pill">
                            Follow
                        </button>
                        }
                    </div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><strong>Reviews</strong></Accordion.Header>
                            <Accordion.Body>
                                {reviews &&
                                    <div className="list-group">
                                        {reviews.map((review) =>
                                            <Link to={`/anime/${review.animeId}`} className="list-group-item d-flex justify-content-between align-items-center">
                                                <div>
                                                    <span className="fw-bold"> {review.animeTitle} </span><br/>
                                                    <span className="float-end"> {review.review} </span>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><strong>Ratings</strong></Accordion.Header>
                            <Accordion.Body>
                                <div className="list-group">
                                    {
                                        userRatings && userRatings.map((rating) =>
                                           <Link to={`/anime/${rating.animeId}`} className="list-group-item">
                                               <div>
                                                   <span> {rating.animeTitle} </span>
                                                   <span className="float-end"> {rating.rating} </span>
                                               </div>
                                           </Link>
                                        )
                                    }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><strong>Favorites</strong></Accordion.Header>
                            <Accordion.Body>
                                <div className="mt-2">
                                    {
                                        favorites &&
                                        <div className="list-group">
                                            {
                                                favorites.map((favorite) =>
                                                  <Link to={`/anime/${favorite.animeId}`} className="text-decoration-none text-dark list-group-item d-flex align-items-center">
                                                      <div>
                                                          <img src={favorite.animeImg} alt="Unable to render" height={100} width={67} className="rounded"/>
                                                      </div>
                                                      <h2 className="ms-2">
                                                          {favorite.animeTitle}
                                                      </h2>
                                                  </Link>
                                                )
                                            }
                                        </div>
                                    }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><strong>Following</strong></Accordion.Header>
                            <Accordion.Body>
                                {following &&
                                    <div className="list-group">
                                        {following.map((follow) =>
                                            <Link to={`/public-profile/${follow.followed._id}`} className="list-group-item">
                                                <div>{follow.followed.username}</div>
                                            </Link>
                                        )}
                                    </div>
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><strong>Followers</strong></Accordion.Header>
                            <Accordion.Body>
                                {followers &&
                                    <div className="list-group">
                                        {followers.map((follow) =>
                                            <Link to={`/public-profile/${follow.follower._id}`} className="list-group-item">
                                                {follow.follower.username}
                                            </Link>
                                        )}
                                    </div>
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </>
            }
        </>
    )
}

export default PublicProfile