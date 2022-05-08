import { signOut } from 'firebase/auth';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase.init';
import pic from "../../Images/Logo/Logo.jpg";
import './Header.css';
const Header = () => {
  const [user]=useAuthState(auth);
  const handlesignout=()=>{
    signOut(auth);
  }
  return (
    <div >
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand>
      <img className="header-img" src={pic} alt=""/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className='text-white-700' as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>
    <Nav className="fixed">
    {
        user&&<>
        <Nav.Link as={Link} to="#">Manage Item</Nav.Link>
        <Nav.Link as={Link} to="#">Add Item</Nav.Link></>
      }
      {
        user?
        <Nav.Link onClick={handlesignout} as={Link} to="/login">Log Out</Nav.Link>
        :<Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      {
        user?<Nav.Link as={Link} to="#">My Items</Nav.Link>
        :<Nav.Link as={Link} to="/register">Register</Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header