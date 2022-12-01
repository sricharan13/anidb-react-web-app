import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "./users-thunk";

const UserList = () => {
    const {users} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <h3 className="text-center">Users</h3>
            <ul className="list-group">
                {
                    users.map((user) =>
                        <li className="list-group-item"
                            key={user._id}>
                            {user.username}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default UserList