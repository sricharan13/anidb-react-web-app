import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {logoutThunk} from "./users-thunk";

const Account = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [currentUserState, setCurrentUserState] = React.useState({currentUser})
    const dispatch = useDispatch()
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
            {currentUser && (
                <div className="text-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>Welcome, {currentUser.username}</h4>
                        <button className="btn btn-danger rounded-pill" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                    <div className="mt-2">
                        <div className="mt-2 form-floating">
                            <input type="text" id="firstName" className="form-control rounded-pill" name="firstName"
                                   defaultValue={currentUser.firstName}
                                   onChange={(event) => updateCurrentUserData(event)}/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="mt-2 form-floating">
                            <input type="text" id="lastName" className="form-control rounded-pill" name="lastName"
                                   defaultValue={currentUser.lastName}
                                   onChange={(event) => updateCurrentUserData(event)}/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="mt-2 form-floating">
                            <input type="text" id="password" className="form-control rounded-pill" name="password"
                                   defaultValue={currentUser.password}
                                   onChange={(event) => updateCurrentUserData(event)}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="mt-2 form-floating">
                            <input type="text" id="email" className="form-control rounded-pill" name="email"
                                   defaultValue={currentUser.email}
                                   onChange={(event) => updateCurrentUserData(event)}/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn btn-primary rounded-pill mt-2">
                        Update
                    </button>
                </div>
            )}
        </>
    )
}

export default Account;