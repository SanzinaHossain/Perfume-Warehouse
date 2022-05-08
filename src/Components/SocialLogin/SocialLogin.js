import React from 'react'
import { Button } from 'react-bootstrap'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./SocialLogin.css"
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorelement;
    if (error) {
            errorelement=<div>
            <p className="text-danger">Error: {error.message}</p>
          </div>
      }
      if (user) {
        navigate(from, { replace: true });
    }
  return (
    <div>
    <Button className="google-button" onClick={() => signInWithGoogle()} variant="warning" type="submit">
    Google Login
    </Button>
    {errorelement}
    </div>
  )
}

export default SocialLogin