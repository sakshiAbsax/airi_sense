import React from "react";
import logo from "../images/logo.png";
import "../component/footer.css";
import {AiFillYoutube} from 'react-icons/ai';
import { AiFillLinkedin  } from "react-icons/ai";
import {CiFacebook} from 'react-icons/ci';
import {FaOutdent} from 'react-icons/fa';
import {ImBlog} from 'react-icons/im';
import {BiMailSend, BiMobile, BiSolidContact} from 'react-icons/bi';
import {ImLocation} from 'react-icons/im';
import { Link } from "react-router-dom";
import './footer.css';

export const Footer = () => {
  return (
    <>
      <footer className="footer-section bg-dark">
        <div className=" container-fluid w-100">
          <div className="row justify-content-center py-5" >
            <div className="col-lg-4 col-md-12 col-sm-12   text-light">
               <Link to="/"> <img src={logo} className="w-50" alt="logo_pic" /> </Link>
                <p className=" mt-4 text-center" style={{textAlign:"justify"}}>Airi sense delivers data-driven & robotic solutions for your logistics automation alongside reliable, modular service concepts. divlaborating with forward-thinking companies
                </p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 mx-2 pt-3 text-light">
                <h3 className="text-start ms-5">UsefullLinks</h3>
                <ul className="list-group py-3 " style={{listStyleType:"none"}}>
                <Link to="/about" className="mb-3 ps-5 nav-link text-light text-start"> <li><FaOutdent  className="me-3 fs-4" />About-us</li></Link>
                <Link to="/blogs" className=" mb-3 ps-5 nav-link text-light text-start"> <li><ImBlog  className="me-3 fs-4" />  Blogs</li></Link>
                <Link to="/contact" className=" mb-3 ps-5 nav-link text-light text-start"><li> <BiSolidContact className="me-3 fs-4" />Contact</li></Link>
                    
                </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 mx-2 pt-3 text-light">
              <h3 className="text-start ms-5"> Social Media</h3>
              <ul className="list-group py-3" style={{listStyleType:"none"}}>
                <Link to="/" className=" mb-3 ps-5 nav-link text-light text-start"><li><CiFacebook  className="me-1 fs-4 "/> Facebook </li></Link>
                <Link to="/" className=" mb-3 ps-5 nav-link text-light text-start"><li><AiFillLinkedin className="me-1 fs-4 " />LinkedIn</li></Link>
                <Link to="/" className=" mb-3 ps-5 nav-link text-light text-start"><li><AiFillYoutube className="me-1 fs-4 " /> Youtube</li></Link>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6  pt-3 text-light">
            <h3 className="text-start ms-5">Location</h3>
              <ul className="list-group py-3" style={{listStyleType:"none"}}>
                <Link to="/" className=" mb-3 ps-5 nav-link text-light text-start"><li><ImLocation  className="me-1 fs-4 "/> <span className="text-center" style={{textAlign:"justify"}}>solutions for your logistics automation</span> </li></Link>
                <Link to="/" className=" mb-3 ps-5 nav-link text-light text-start"><li><BiMailSend className="me-1 fs-4 " />LinkedIn@gmail.com </li></Link>
                <Link to="/" className=" mb-3 ps-5 nav-link text-light text-start"><li><BiMobile className="me-1 fs-4 " /> +919876543210</li></Link>
                </ul>
           
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
