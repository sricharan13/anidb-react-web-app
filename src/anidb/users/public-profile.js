import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {findFollowersThunk, findFollowingThunk, findIfFollowingThunk, followUserThunk, unFollowUserThunk} from "../follows/follows-thunks";
import {useEffect} from "react";
import {findUserByIdThunk} from "./users-thunk";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {Link} from "react-router-dom";
import {Accordion} from "react-bootstrap";

const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
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
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
        dispatch(findIfFollowingThunk(uid))
    }, [ifFollowing])
    return(
        <>
            <h3 className="text-center">Public Profile</h3>
            {publicProfile &&
                <>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div>
                            <h5>{publicProfile.username} &middot; {publicProfile.firstName} {publicProfile.lastName}</h5>
                        </div>
                        {currentUser && ifFollowing && <button
                            onClick={handleUnFollowBtn}
                            className="btn btn-outline-danger btn-sm rounded-pill">
                            Unfollow
                        </button>
                        }
                        {currentUser && !ifFollowing && <button
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
                                                <div>{review.review}</div>
                                            </Link>
                                        )}
                                    </div>
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
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
                        <Accordion.Item eventKey="2">
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