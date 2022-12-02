import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import {Navigate} from "react-router";
import {Link} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
        }
        catch (e) {

        }
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h3 className="text-center">Login</h3>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input className="form-control mb-2" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/>
            <input className="form-control mb-2" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLoginBtn} className="btn btn-primary w-100">Login</button>
            <div className="text-center mt-2">
                <span>Don't have an account? </span>
                <Link to="/register"><span>Register Now</span></Link>
            </div>
        </>
    )
}

export default Login