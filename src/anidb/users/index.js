import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk, deleteUserThunk} from "./users-thunk";
import {Link} from "react-router-dom";

const UserList = () => {
    const {users} = useSelector((state) => state.users)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleDeleteBtn = (uid) => {
        dispatch(deleteUserThunk({
            uid: uid
        }))
    }
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [JSON.stringify(users)])
    return(
        <>
            <h3 className="text-center">Users</h3>
            <ul className="list-group">
                {users && users.map((user) =>
                    <>
                        {(currentUser && currentUser._id === user._id) || user &&
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={user._id}>
                                <Link to={`/public-profile/${user._id}`} className="text-decoration-none">
                                    {user.username}
                                </Link>
                                {currentUser && currentUser.accountType === 'ADMIN' &&
                                    <button className="btn btn-sm btn-danger rounded-pill" onClick={() => handleDeleteBtn(user._id)}>Delete</button>
                                }
                            </li>
                        }
                    </>
                )}
            </ul>
        </>
    )
}

export default UserList