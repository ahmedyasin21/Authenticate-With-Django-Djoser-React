import React from "react"
import { Routes, Route,} from "react-router-dom";

// custom imports 
import Home from "./pages/home/home_page";
import SignIn from "./components/signIn/signIn_component";
import SignUp from "./components/signUp/signUp_component";
import ActivateAccount from "./components/activtateAccount/activateAccount_component";
import ResetPassword from "./components/passwords/resetPassword/resetPassword_component";
import ResetPasswordConfirm from "./components/passwords/resetPasswordConfirm/resetPasswordConfirm_component";
import Header from './components/Layouts/header/header'




const App = () => (
  <div>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/sign-in" element={<SignIn />}/>
      <Route exact path="/sign-up" element={<SignUp />}/>
      <Route exact path="/reset-password" element={<ResetPassword />}/>
      <Route exact path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />}/>
      <Route exact path="/activate/:uid/:token" element={<ActivateAccount />}/>
    </Routes>
  </div>
)

export default App;
