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
    const {loginError} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}))
        }
        catch (e) {}
    }
    if (currentUser) {
        return (<Navigate to={'/profile/account'}/>)
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
            <div className="text-center">
                {loginError &&
                    <div className="alert alert-danger" role="alert">
                        Incorrect Credentials
                    </div>
                }
                <input required="required" className="form-control mb-2 rounded-pill" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/>
                <input required="required" type="password" className="form-control mb-2 rounded-pill" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleLoginBtn} className="btn btn-primary rounded-pill">Login</button>
                <div className="mt-2">
                    <span>Don't have an account? </span>
                    <Link to="/register"><span>Register Now</span></Link>
                </div>
            </div>
        </>
    )
}

export default Login