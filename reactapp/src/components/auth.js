import React, { useState, useContext} from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import GlobalState from '../contexts/GlobalState';

const clientId =
  "356124224469-821jfvmv0rn06cjk3asl5cst8hf8cs6n.apps.googleusercontent.com";

function Auth() {
  const [state, setState] = useContext(GlobalState);
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    setState(state => ({...state, isSignedIn: true}));
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    setState(state => ({...state, isSignedIn: false}));
    // alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default Auth;
