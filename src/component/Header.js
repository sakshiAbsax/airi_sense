import React from 'react';
import Container from 'react-bootstrap/Container';
import { Hamburger } from './Hamburger';
import { Link, NavLink } from 'react-router-dom';
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
        <Link to="/">
      <div className="logo">
          <img src={logo}  className='w-100' />
        </div>
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
          <li>
              <NavLink className=" fs-5" to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink className=" fs-5" to="/solutions">Solutions</NavLink>
            </li>
            <li>
              <NavLink className=" fs-5" to="/industries">Industries</NavLink>
            </li>
            <li>
              <NavLink className=" fs-5" to="/customer">Customers</NavLink>
            </li>
            <li>
              <NavLink className=" fs-5" to="/about">About</NavLink>
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