import React , {useState}from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {connect} from 'react-redux';
import { verifyRegistration } from "../../redux/auth/auth_actions";


const ActivateAccount = ({verifyRegistration,isAuthenticated}) => {
    let params = useParams();
    const [verified, setVerified] = useState(false)

    const onClick = e => {
        const uid = params.uid
        const token = params.token

        console.log(uid,token)
        if (uid!==null && token!==null) {
            console.log("Truth")
            verifyRegistration(uid, token)  
            setVerified(true)
        }
    }

    //Is the user authenticated ?
    //Redirect them to the home page
    if (isAuthenticated || verified) {
        return <Navigate to="/" />
    }

    return (
        <div className="container mt-5" style={{textAlign:"center"}}>
            <h1>Verify your account</h1>

            <button className="btn btn-primary btn-lg" onClick={e => onClick(e)}>
                Verify
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps, {verifyRegistration} )(ActivateAccount);