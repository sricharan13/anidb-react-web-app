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
    const [accountType, setAccountType] = useState('OTAKU')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const {registerError} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const handleRegisterBtn = () => {
        if (username === '' || password === '' || validatePassword === '' || firstName === '' || lastName === '' || email === '') {
            setError('Empty Fields')
            return
        }
        if (!isEmail(email)) {
            setError('Invalid Email')
            return
        }
        if (password !== validatePassword) {
            setError('Password Mismatch')
            return
        }
        setError(null)
        const newUser = {username, password, firstName, lastName, email, accountType}
        dispatch(registerThunk(newUser))
    }
    if (currentUser) {
        return (<Navigate to={'/profile/account'}/>)
    }
    return(
        <>
            <h3 className="text-center">Register</h3>
            {error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            {registerError &&
                <div className="alert alert-danger">
                    Username unavailable
                </div>
            }
            <div className="text-center">
                <input
                    className="form-control mb-2 rounded-pill"
                    placeholder="Enter First Name"
                    onChange={(e) => setFirstName(e.target.value)}/>
                <input
                    className="form-control mb-2 rounded-pill"
                    placeholder="Enter Last Name"
                    onChange={(e) => setLastName(e.target.value)}/>
                <input
                    className="form-control mb-2 rounded-pill"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}/>
                <input
                    className="form-control mb-2 rounded-pill"
                    placeholder="Enter Username"
                    onChange={(e) => setUsername(e.target.value)}/>
                <input
                    className="form-control mb-2 rounded-pill"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}/>
                <input
                    className="form-control mb-2 rounded-pill"
                    placeholder="Re-Enter Password"
                    onChange={(e) => setValidatePassword(e.target.value)}/>
                <select className="form-control mb-2 rounded-pill" onChange={(e) => setAccountType(e.target.value)}>
                    <option value="" disabled={true} hidden={true}>Account Type</option>
                    <option value="OTAKU" selected={true}>Otaku</option>
                    <option value="ADMIN">Admin</option>
                </select>
                <button
                    onClick={handleRegisterBtn}
                    className="btn btn-primary rounded-pill">
                    Register
                </button>
            </div>

        </>
    )
}

export default Register