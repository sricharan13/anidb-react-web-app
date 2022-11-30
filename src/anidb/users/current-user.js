import React, {useEffect} from "react";
import {profileThunk} from "./users-thunk";
import {useDispatch, useSelector} from "react-redux";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    console.log("checking for profile")
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    console.log("checked for profile")
    const {currentUser} = useSelector((state) => state.users)
    console.log(currentUser)
    return(children)
}

export default CurrentUser