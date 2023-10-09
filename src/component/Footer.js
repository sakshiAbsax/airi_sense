import React from "react";
import logo from "../images/logo.png";
import "../component/footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer-section bg-dark">
        <div className="container-fuild w-100">
          <div className="row py-5" >
            <div className="col-lg-3 text-light">
                <img src={logo} alt="logo_pic" />
            </div>
            <div className="col-lg-3 text-light">
                <h3>UsefullLinks</h3>
                <ul className="text-decoration-none">
                    <li>About-us</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                    <li></li>
                </ul>
            </div>
            <div className="col-lg-3 text-light">
                
            </div>
            <div className="col-lg-3 text-light">Locations</div>
          </div>
        </div>
      </footer>
    </>
  );
};
