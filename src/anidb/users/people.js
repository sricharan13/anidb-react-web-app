import {Accordion} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findFollowersThunk, findFollowingThunk} from "../follows/follows-thunks";
import {Link} from "react-router-dom";

const People = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {followers, following} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findFollowersThunk(currentUser._id))
        dispatch(findFollowingThunk(currentUser._id))
    }, [currentUser._id])
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header><strong>People you follow</strong></Accordion.Header>
                <Accordion.Body>
                    <div>List of Following</div>
                    <div className="list-group">
                        {
                            following && following.map((follow) =>
                                <Link to={`/profile/${follow.followed._id}`} className="list-group-item">
                                    {follow.followed.username}
                                </Link>
                            )
                        }
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><strong>People following you</strong></Accordion.Header>
                <Accordion.Body>
                    <div>List of Following</div>
                    <div className="list-group">
                        {
                            followers && followers.map((follow) =>
                                <Link to={`/profile/${follow.follower._id}`} className="list-group-item">
                                    {follow.follower.username}
                                </Link>
                            )
                        }
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default People;