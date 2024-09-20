import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/images/sharedmoments-logo.png'


const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className="bg-body-secondary">
        <Container className=''>
            <Navbar.Brand>
                <img
                    src={logo}
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className='mr-auto d-flex align-items-start'>
                <Nav.Link><i className='fas fa-home'></i>Home</Nav.Link>
                <Nav.Link><i className='fas fa-sign-in-alt'></i>Sign in</Nav.Link>
                <Nav.Link><i className='fas fa-user-plus'></i>Sign up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar