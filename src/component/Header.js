import React from "react";
import Container from "react-bootstrap/Container";
import { Hamburger } from "./Hamburger";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
export const Header = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav className="navbar fixed-top   ">
        <Container>
          
          <div className="header-nav ps-lg-5 ms-lg-5">
            <Link to="/">
              <div className="logo ms-lg-5">
                <img src={logo} className="w-100" />
              </div>
            </Link>

            <div className="menu-icon ps-5 ms-5" onClick={handleShowNavbar}>
              <Hamburger />
            </div>

            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul className="ms-lg-5  pb-0 mb-0 text-start">
                <li>
                  <NavLink className=" fs-6" to="/product">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className=" fs-6" to="/solutions">
                    Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink className=" fs-6" to="/industries">
                    Industries
                  </NavLink>
                </li>
                <li>
                  <NavLink className=" fs-6" to="/customer">
                    Customers
                  </NavLink>
                </li>
                 <li>
                  <NavLink className=" fs-6" to="/about">
                    About
                  </NavLink>
                </li>
                {/* <li>
              <NavLink className=" fs-6" to="/contact">Contact</NavLink>
            </li> */}
           
              </ul>
            
            </div>

            <div className="ps-lg-5  ps-md-3 ms-lg-3 headerBtn">
              <a href="/contact" className="text-white btn-md headerBtn  btn-warning btn rounded-pill">Contact-Us</a>
            </div>
            
          </div>
         
        </Container>
      </nav>
    </>
  );
};
