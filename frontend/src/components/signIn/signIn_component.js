import React , {useState}from "react";
import { Link, Navigate } from "react-router-dom";
import {connect} from 'react-redux';
import { signIn } from "../../redux/auth/auth_actions";


const SignIn = ({signIn,isAuthenticated}) => {
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const {username, password} = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value})
    };

    const onSubmit = e => {
        e.preventDefault()

        signIn(username, password)
    }

    //Is the user authenticated ?
    //Redirect them to the home page
    if (isAuthenticated) {
        return <Navigate to="/" />
    }


    return (
        <div className="container mt-5">
            <h1>
                Sign In
            </h1>
            <p>Sign into your Account</p>

            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        name = "username"
                        value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <br/>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name = "password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength={6}
                        required
                    />
                </div>
                <br/>
                <button className="btn btn-primary" type="submit">Sign In</button>
            </form>
            <p className="mt-3">
                Don't have an account ? <Link to="/sign-up">Sign Up</Link>
            </p>
            <p className="mt-3">
                Forgot Password? <Link to="/reset-password">Reset Password</Link>
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps, {signIn} )(SignIn);