import React , {useState}from "react";
import { Link, Navigate,useParams } from "react-router-dom";
import {connect} from 'react-redux';
import { reset_password_confirm } from "../../../redux/passwords/passwords_actions";



const ResetPasswordConfirm = ({match,reset_password_confirm}) => {
    let params = useParams();

    const [requestSent,setRequestSent] = useState(false)

    const [formData, setFormData] = useState({
        new_password:'',
        re_new_password:""
    });

    const {new_password,re_new_password} = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value})
    };

    if(requestSent){
        return <Navigate to="/" />
    }

    const onSubmit = e => {
        e.preventDefault()

        const uid = params.uid
        const token = params.token

        if (new_password===re_new_password) {
            reset_password_confirm(uid,token,new_password,re_new_password)
            setRequestSent(true)
        }
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
                        type="password"
                        placeholder="New Password"
                        name = "new_password"
                        value={new_password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="password"
                        placeholder="Confirm New Password"
                        name = "re_new_password"
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <br/>
                <button className="btn btn-primary" type="submit">Reset Password Confirm</button>
            </form>
        </div>
    )
}



export default connect(null, {reset_password_confirm})(ResetPasswordConfirm);