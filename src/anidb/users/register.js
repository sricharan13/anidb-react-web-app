import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";
import {Navigate} from "react-router";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, password, firstName, lastName, email}
        dispatch(registerThunk(newUser))
    }
    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }
    return(
        <>
            <h3 className="text-center">Register</h3>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            <input
                className="form-control mb-2"
                placeholder="Enter First Name"
                onChange={(e) => setFirstName(e.target.value)}/>
            <input
                className="form-control mb-2"
                placeholder="Enter Last Name"
                onChange={(e) => setLastName(e.target.value)}/>
            <input
                className="form-control mb-2"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}/>
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
        </>
    )
}

export default Register