import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunks";
import {useNavigate} from "react-router";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, password}
        dispatch(registerThunk(newUser))
    }
    return(
        <>
            <h1>Register</h1>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input
                className="form-control mb-2"
                placeholder="Enter First Name"
                onChange={(e) => setValidatePassword(e.target.value)}/>
            <input
                className="form-control mb-2"
                placeholder="Enter Last Name"
                onChange={(e) => setValidatePassword(e.target.value)}/>
            <input
                className="form-control mb-2"
                placeholder="Enter Email"
                onChange={(e) => setValidatePassword(e.target.value)}/>
            <input
                className="form-control mb-2"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}/>
            <input
                className="form-control mb-2"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}/>
            <input
                className="form-control mb-2"
                placeholder="Re-Enter Password"
                onChange={(e) => setValidatePassword(e.target.value)}/>
            <button
                onClick={handleRegisterBtn}
                className="btn btn-primary w-100">
                Register
            </button>
            {
                currentUser && navigate("/profile")
            }
        </>
    )
}

export default Register