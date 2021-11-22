import React , {useState}from "react";
import { Link, Navigate } from "react-router-dom";
import {connect} from 'react-redux';
import { reset_password } from "../../../redux/passwords/passwords_actions";



const ResetPassword = ({reset_password}) => {

    const [requestSent,setRequestSent] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
    });

    const {email} = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value})
    };

    if(requestSent){
        return <Navigate to="/" />
    }

    const onSubmit = e => {
        e.preventDefault()

        reset_password(email)
        setRequestSent(true)
    }


    return (
        <div className="container mt-5">
            <h1>
                Reset Password
            </h1>
            <p>Change your Account Password</p>

            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name = "email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <br/>
                <button className="btn btn-primary" type="submit">Reset Password</button>
            </form>
        </div>
    )
}



export default connect(null, {reset_password})(ResetPassword);