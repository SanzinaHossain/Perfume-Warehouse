import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"
import Loading from '../../Shared/Loading/Loading';
const Login = () => {
  const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    const location=useLocation();
    let errorElement;
    let from =location.state?.from?.pathname||"/";
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  if(loading){
    return <Loading></Loading>
}
    const handlesubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
        const url=`https://murmuring-plains-44040.herokuapp.com/login`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            localStorage.setItem('accessToken',data.accessToken);
            navigate(from,{replace:true});
        })
    }

    const navigateRegister=event=>{
        navigate('/register');
    }

    if(user)
    {
      navigate(from,{replace:true});
    }
    const resetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
          await sendPasswordResetEmail(email);
          toast('Sent email');
      }
      else{
          toast('please enter your email address');
      }
    }
  return (
      <div className='container w-50 mx-auto mb-4'>
        <h1 className="text-center mt-3 mb-4 text-danger">Please Login !!!</h1>
        <Form onSubmit={handlesubmit} className='login'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Button className="login-button"variant="warning" type="submit">
    Login
  </Button>
  <br/><br/>
  <p className='text-center'>New to Foody Goddy? <Link to="/register" className="text-primary pe-auto" onClick={navigateRegister}><u>Please Register!!</u></Link></p>
  {errorElement}
  <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
  <SocialLogin></SocialLogin>
  <ToastContainer/>
</Form>
    </div>
  )
}

export default Login