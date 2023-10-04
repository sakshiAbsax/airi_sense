import React from 'react';
import Container from 'react-bootstrap/Container';
import { Hamburger } from './Hamburger';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
export const Header=()=>{
    const [showNavbar, setShowNavbar] = React.useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
    return(
        <>
    <nav className="navbar bg-light py-2">
      <Container>
      <div className="logo">
          <img src={logo}  className='w-100' />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
          <li>
              <NavLink className=" fs-5" to="/">Products</NavLink>
            </li>
            <li>
              <NavLink className=" fs-5" to="/blogs">Solutions</NavLink>
            </li>
            <li>
              <NavLink className=" fs-5" to="/projects">Industries</NavLink>
            </li>
            <li>
              <NavLink className=" fs-5" to="/projects">Customers</NavLink>
            </li>
            {/* <li>
              <NavLink className=" fs-5" to="/contact">Contact</NavLink>
            </li> */}
          </ul>
        </div>
      </Container>
        
     
    </nav>

        </>
    )
}