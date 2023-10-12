import React from "react";
// import footerlogo from "../images/footerlogo.png";
import "../component/footer.css";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaOutdent } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { BiMailSend, BiMobile, BiSolidContact } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import whitetext from '../images/whitetext.png';
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {

  const phoneNumber = '98270 67846'; // Replace with the desired phone number

  const handlePhoneCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    const email = "automate@airi-sense.co.in"; // Replace with the recipient's email address
    window.location.href = `mailto:${email}`;
  };
 
 const  openFacebookPage=()=> {
    const facebookPageUrl = 'https://www.facebook.com/yourpage';
    
   
    window.open(facebookPageUrl, '_blank');
  }

  const openLinkedInProfile=()=> {
    
    const linkedInProfileUrl = 'https://www.linkedin.com/in/yourprofile';
    window.open(linkedInProfileUrl, '_blank');
  }

  const openYouTubeChannel=()=> {
    
    const youTubeChannelUrl = 'https://www.youtube.com/c/yourchannel';
    window.open(youTubeChannelUrl, '_blank');
  }
  const handleFacebbokClick = () => {
    const email = "automate@airi-sense.co.in"; // Replace with the recipient's email address
    window.location.href = `mailto:${email}`;
  };
  return (
    <>
      <footer className="footer-section">
        <div className=" container w-100">
          <div className="row justify-content-center pt-4">
            <div className="col-lg-4 col-md-12 col-sm-12 pt-3  text-start ">
              <Link to="/"  className="text-start">
                {" "}
                <img src={whitetext} className="w-50" alt="logo_pic" />{" "}
              </Link>
              <p
                className="   nav-links"
                style={{ textAlign: "justify" }}
              >
                Airi sense delivers data-driven & robotic solutions for your
                logistics automation alongside reliable, modular service
                concepts. divlaborating with forward-thinking companies
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 pt-3 text-start">
              <h3 className="text-start nav-links ms-5">UsefullLinks</h3>
              <ul
                className="list-group py-3 "
                style={{ listStyleType: "none" }}
              >
                <Link to="/about" className="mb-3 ps-5 nav-link">
                  {" "}
                  <li>
                    <FaOutdent className="me-3 fs-4" />
                    About-us
                  </li>
                </Link>
                <Link to="/blogs" className=" mb-3 ps-5 nav-link">
                  {" "}
                  <li>
                    <ImBlog className="me-3 fs-4" /> Blogs
                  </li>
                </Link>
                <Link to="/contact" className=" mb-3 ps-5 nav-link">
                  <li>
                    {" "}
                    <BiSolidContact className="me-3 fs-4" />
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 text-left  pt-3 ">
            <h3 className="text-start nav-links ms-5">Social Media</h3>
              <ul
                className="list-group py-3 "
                style={{ listStyleType: "none" }}
              >{" "}
                  <li onClick={openFacebookPage} className="mb-3 ps-5 nav-link">
                    <FaOutdent className="me-3 fs-4" />
                     Facebook
                  </li> {" "}
                  <li onClick={openLinkedInProfile} className="mb-3 ps-5 nav-link">
                    <FaLinkedinIn className="me-3 fs-4" />
                    LinkedInd
                  </li>
                  <li onClick={openYouTubeChannel} className="mb-3 ps-5 nav-link">
                    {" "}
                    <BiSolidContact className="me-3 fs-4" />
                    Youtube
                  </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 text-start  pt-3 ">
              <h3 className="text-start nav-links ms-5">Location</h3>
              <ul className="list-group " style={{ listStyleType: "none" }}>
                <Link to="/" className=" mb-3 ps-5 nav-link  text-start">
                  <li className="mb-2">
                  <div class="d-flex pt-3 text-start">
                  <FaLocationDot className="me-3 fs-5" />
                  <span>
                    162 A Prime City Veena Nagar NX, Sukhliya, Indore, M.P.
                    452010
                  </span>
                </div>
                  </li>
                </Link>
          
                  <li className=" mb-3 ps-5 nav-link  text-start" onClick={handleEmailClick}>
                    <BiMailSend className="me-3 fs-4 " />
                    {" "} automate@airi-sense.co.in
                  </li>
             
                <Link to="/" className=" mb-3 ps-5 nav-link  text-start">
                  <li onClick={handlePhoneCallClick}>
                    <BiMobile className="me-3 fs-4 " /> 
                    98270 67846
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
