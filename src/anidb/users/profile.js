import {useSelector} from "react-redux";
import {Navigate, Outlet, useLocation} from "react-router";
import React from "react";
import {Link} from "react-router-dom";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation()
    const parts = pathname.split('/')
    if (!currentUser) {
        return (<Navigate to={'/login'}/>)
    }
    return (
        <>
            <h3 className="text-center">Profile</h3>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">

                    <Link to="/profile/account" className={`nav-link ${parts[2] === 'account'?'active': ''}`}>Account</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile/people" className={`nav-link ${parts[2] === 'people'?'active': ''}`}>People</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile/favourites" className={`nav-link ${parts[2] === 'favourites'?'active': ''}`}>Favourites</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile/my-reviews" className={`nav-link ${parts[2] === 'my-reviews'?'active': ''}`}>My Reviews</Link>
                </li>
            </ul>
            <div className="mt-2">
                <Outlet/>
            </div>
        </>
    )
}
export default Profile