import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findUsersListThunk} from "./users-thunk";
import {Link} from "react-router-dom";
import {followUserThunk} from "../follows/follows-thunks";

const UserList = () => {
    const {users} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleFollowBtn = (followedId) => {
        dispatch(followUserThunk({
            followed: followedId
        }))
    }
    useEffect(() => {
        dispatch(findUsersListThunk())
    }, [])
    return(
        <>
            <h3 className="text-center">Users</h3>
            <ul className="list-group">
                { users && users.map((user) =>
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={user._id}>
                        <Link to={`/profile/${users._id}`} className="text-decoration-none">
                            {user.username}
                        </Link>
                        {currentUser && currentUser.accountType === 'OTAKU' &&
                            <button className="btn btn-sm btn-primary rounded-pill" onClick={() => handleFollowBtn(user._id)}>Follow</button>
                        }
                        {currentUser && currentUser.accountType === 'ADMIN' &&
                            <button className="btn btn-sm btn-danger rounded-pill">Delete</button>
                        }
                    </li>
                )}
            </ul>
        </>
    )
}

export default UserList