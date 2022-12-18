import React, {useEffect} from "react";
import {profileThunk} from "./users-thunk";
import {useDispatch, useSelector} from "react-redux";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    const {currentUser} = useSelector((state) => state.users)
    return(children)
}

export default CurrentUser