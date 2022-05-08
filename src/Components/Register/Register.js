import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Register.css"
import auth from "../../firebase.init";
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
  const emailRef=useRef('');
    const passwordRef=useRef('');
    const nameRef=useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const navigate=useNavigate();
    const navigateRegister=event=>{
        navigate('/login');
    }
    if(loading){
      return <Loading></Loading>
  }
    if(user)
    {
      navigate('/')
    }
    const handleRegister=event=>{
        event.preventDefault();
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        createUserWithEmailAndPassword(email,password);
    }
  return (
    <div>
       <div className='container w-50 mx-auto mb-4'>
        <h1 className="text-center mt-5 mb-4 text-danger">Please Register !!!</h1>
        <Form className='register' onSubmit={handleRegister}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control ref={nameRef} name="name" type="text" placeholder="Enter Your Name" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} name="email" type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} name="password" type="password" placeholder="Password" required/>
  </Form.Group>
  <Button className="register-button" variant="warning" type="submit">
    Register
  </Button>
  <br/><br/>
  <p className='text-center'>Already have an Account? <Link to="/login" className="text-danger pe-auto" onClick={navigateRegister}><u>Please Login!!</u></Link></p>
</Form>
    </div>
    </div>
  )
}

export default Register