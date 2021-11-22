import React, {useEffect} from "react";
import { connect } from "react-redux";
import Navbar from "../Layouts/navbar/navbar";
import {checkAuthenticated,load_user} from "../../redux/auth/auth_actions"


const SignOut = (props) =>{
    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    },[])
    
    return(
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default connect(null,{checkAuthenticated,load_user})(SignOut);