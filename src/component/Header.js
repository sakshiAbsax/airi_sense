import React from "react";
// import Container from "react-bootstrap/Container";
import { Hamburger } from "./Hamburger";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './header.css';
export const Header = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink to="/">
            <div className="logo ms-lg-5">
              <img src={logo} className="w-75" />
            </div>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <NavLink to="/product" className="mx-4 nav-link-products">Products</NavLink>
              <NavLink to="/solutions" className="mx-4 nav-link-products">Solutions</NavLink>
              <NavLink to="/industries" className="mx-4 nav-link-products">Industries</NavLink>
              <NavLink to="/customer" className="mx-4 nav-link-products">Coustomer</NavLink>
            </Nav>
            <Form className="d-flex ms-auto  d-flex justify-content-center">
              <Link to="/contact">

            
              <Button variant="warning" className="btn btn-lg btn-borderd"> Contact Us</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
