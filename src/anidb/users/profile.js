import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunks";
import {useNavigate} from "react-router";
import React, {useState} from "react";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    console.log(currentUser)
    const [currentUserState, setCurrentUserState] = React.useState({currentUser})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutThunk())
    }
    const updateCurrentUserData = (event) => {
        setCurrentUserState({
            ...currentUserState,
            [event.target.name]: event.target.value
        })
    }
    return(
        <>
            <h3 className="text-center">Profile</h3>
            {
                currentUser && (
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Welcome, {currentUser.username}</h4>
                            <button className="btn btn-danger" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                        <div className="mt-2">
                            <div className="mt-2 form-floating">
                                <input type="text" id="firstName" className="form-control" name="firstName"
                                       defaultValue={currentUser.firstName} onChange={(event) => updateCurrentUserData(event)}/>
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="mt-2 form-floating">
                                <input type="text" id="lastName" className="form-control" name="lastName"
                                       defaultValue={currentUser.lastName} onChange={(event) => updateCurrentUserData(event)}/>
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            <div className="mt-2 form-floating">
                                <input type="text" id="password" className="form-control" name="password" defaultValue={currentUser.password}
                                       onChange={(event) => updateCurrentUserData(event)}/>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="mt-2 form-floating">
                                <input type="text" id="email" className="form-control" name="email"
                                       defaultValue={currentUser.email} onChange={(event) => updateCurrentUserData(event)}/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <button className="btn btn-primary form-control mt-2">
                            Update
                        </button>
                    </div>
                )}
            {
                !currentUser && navigate('/login')
            }
        </>
    )
}

export default Profile