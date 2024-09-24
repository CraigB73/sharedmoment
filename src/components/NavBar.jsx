// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from "react-router-dom";

// import logo from '../assets/images/sharedmoments-logo.png'
// import styles from '../styles/NavBar.module.css'


// const NavBar = () => {
//     return (
//         <Navbar expand="md" fixed="top" className={styles.NavBar} >
//             <Container>
// 							<NavLink to='/' end>
// 									<Navbar.Brand>
// 											<img
// 													src={logo}
// 													width="45"
// 													height="45"
// 													className="d-inline-block align-top"
// 													alt="logo"
// 											/>
// 									</Navbar.Brand>
// 							</NavLink>
// 							<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 								<Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
// 									<Nav className='mr-auto d-flex align-items-start'>
//           <NavLink
//             to='/'
//             className={(isActive) => `${styles.NavLink} ${isActive ? 'active' : ''}`}
//           >
//              <i className='fas fa-home'></i>Home
//           </NavLink>
//           <NavLink
//             to='/signin'
//             className={(isActive ) => `${styles.NavLink} ${isActive ? 'active' : ''}`}
//           >
//             <i className='fas fa-sign-in-alt'></i>Sign in
//           </NavLink>
//           <NavLink
//             to='/signup'
//             className={(isActive ) => `${styles.NavLink} ${isActive ? 'active' : ''}`}
//           >
//             <i className='fas fa-user-plus'></i>Sign up
//           </NavLink>
//         </Nav>
// 							</Navbar.Collapse>
//             </Container>
//           </Navbar>

//   )
// }

// export default NavBar