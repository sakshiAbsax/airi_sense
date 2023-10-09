
import React from 'react'
import logo from '../images/logo.png';
import "../component/footer.css"

export const  Footer = () => {
  return (
    <>
    <footer className="footer-section">
            <div className="container">
                
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={logo} className="img-fluid" alt="logo"/></a>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                    elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                    <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">portfolio</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Expert Team</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Latest News</a></li>
                                </ul>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>
            
        </footer>
    
        </>
  )

}

