import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Accordion} from "react-bootstrap";
import {findReviewsByAuthorThunk} from "../reviews/reviews-thunks";
import {findRatingsByUserThunk} from "../ratings/ratings-thunks";
import {Link} from "react-router-dom";


const MyActivity =() => {
    const {reviews} = useSelector((state) => state.reviews)
    const {userRatings} = useSelector((state) => state.ratings)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findReviewsByAuthorThunk(currentUser._id))
        dispatch(findRatingsByUserThunk(currentUser._id))
    }, [])
    return(
        <>
            <div>My Activity</div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>My Reviews</strong></Accordion.Header>
                    <Accordion.Body>
                        <div className="list-group">
                            {
                                reviews && reviews.map((review) =>
                                       <Link to={`/anime/${review.animeId}`} key={review.animeId} className="list-group-item">
                                           <div>
                                               <span> {review.animeTitle} </span>
                                               <span className="float-end"> {review.review} </span>
                                           </div>
                                       </Link>
                                )
                            }
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>My Ratings</strong></Accordion.Header>
                    <Accordion.Body>
                        <div className="list-group">
                            {
                                userRatings && userRatings.map((rating) =>
                                                           <Link to={`/anime/${rating.animeId}`} key={rating.animeId} className="list-group-item">
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
            </Accordion>
        </>

    )
}

export default MyActivity;