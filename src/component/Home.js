import React, { useState } from "react";
import { HomeAbout } from "./HomeAbout";
import { Slider } from "./Slider";
import { Link } from "react-router-dom";
import homeoffer from "../images/homeoffer.png";
import ReviewSlider from "./ReviewSlider";
import { BiRadioCircleMarked } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="">
        <Slider />
      </div>
      <div className="mt-3">
        <HomeAbout />
      </div>

      {/* <div className="row pb-4 pt-2">
        <div className="col-md-12">
          <center>
            <h1>Technologies</h1>
          </center>
        </div>
      </div>

      <div className="row pb-5">
        <div className="container justify-content-center">
          <div className="col-lg-10">
            <div className="featuredPropBox">
              <ul>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                      <h1 className="text-white">TECHNO-1</h1>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                    <h1 className="text-white">TECHNO-1</h1>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                    <h1 className="text-white">TECHNO-1</h1>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
                   <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                      <h1 className="text-white">TECHNO-1</h1>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                    <h1 className="text-white">TECHNO-1</h1>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <div className="fplogo">
                    <h1 className="text-white">TECHNO-1</h1>
                    </div>
                    <div className="fptext">
                      <p>
                        Dummy text is also used to demonstrate the appearance of
                        different typefaces and layouts, and in general the
                        content of dummy text is nonsensical.
                      </p>
                    </div>
                  </a>{" "}
                </li>


           
             
           
              
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <div className="aboutRoot text-white">
        <div className="py-lg-4 ">
          <div className="row justify-content-center  py-5">
            <div className="col-md-8 card px-4 py-3 shadow ">
              <div className="py-4 ourroootSection ">
                <h2 className="text-center fw-bold">Our Root's</h2>
                <h3 className="text-center" style={{ letterSpacing: "3px" }}>
                  Shri Vasant Engineer's
                </h3>

                <p className="text-center outRoot">
                  Our Root's Shri Vasant Engineer's Shri Vasant Engineer’s – 2
                  Decade Old parent company with established footprint from 2003
                  in Indore, has been a rapid growing company, targeting change
                  with New Focus into Conveying & Intralogistics domain.
                </p>
                <p className="text-center outRoot pb-3">
                  Serving more than 233 clients true mix of Global, MNC & Giant
                  Indian conglomerate spread across various industrial sector,
                  with 103+ clients trusting us for repeat business for year
                  over year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section_paddinging partnerSec1">
        <div className="container py-3">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-12 col-sm-12 col-lg-5  mb-5">
              <div className="about_us_img">
                <img src={homeoffer} width="100%" className="pe-5" alt="" />
              </div>
            </div>
            <div className="col col-md-8 col-sm-12 col-lg-6 ps-5 mb-5 py-5">
              <div className="whatWeoffer">
                <h1
                  style={{
                    fontWeight: "600",
                    letterSpacing: "3px",
                  }}
                  className="text-start text-light"
                >
                  What We Offer ?
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Airi sense delivers data-driven & robotic solutions for your
                  logistics automation alongside reliable, modular service
                  concepts.
                </p>
                <div className="row">
                  <div className="col-lg-6 pe-4 pt-3 ">
                    <p>
                      {" "}
                      <span>
                      <AiOutlineCheckCircle style={{color:"var(--orange)"}}/> 
                      </span>
                      <span  className="text-justify">
                      Realistic Solution’s for your
                      current & future needs... </span>
                    </p>
                    <p>
                      {" "}
                      <AiOutlineCheckCircle  style={{color:"var(--orange)"}}/>
                    <span className="text-justify"> Data driven approach ensuring your goals...</span>
                    </p>
                    <p>
                     
                      {" "}
                      <AiOutlineCheckCircle style={{color:"var(--orange)"}} />
                      <span> Green Solutions to ensure you stay on top for energy
                      conservation...</span>
                   
                    </p>
                  </div>
                  <div className="col-lg-6 pt-3 ">
                 <p>
                      <AiOutlineCheckCircle
                    
                        style={{ color: "var(--orange)" }}
                      />
                      <span>  Defining value in your business with our solutions and
                        products</span>
                      </p>
                    <p>
                      <AiOutlineCheckCircle
                      style={{ color: "var(--orange)" }}
                    />
                       <span> Realistic approach for delivering on time every time</span>
                     
                    </p>
                 <p>
                      <AiOutlineCheckCircle
                        style={{ color: "var(--orange)" }}
                      />
                    <span>  Customer centric approach in every action </span>
                </p>
                  </div>
                </div>
                <Link to="/solutions">
                  {" "}
                  <div className="btn btn-lg btn-borderd button-1 my-3">
                    Read More
                  </div>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="reviews-sections container d-flex justify-content-center flex-column py-3">
        <h1 className="my-4" style={{ fontSize: "55px" }}>
          Testimonials
        </h1>
        <ReviewSlider />
      </div>
      <div className="news">
        <div className="row py-4">
          <div className="col-md-12">
            <center className="whatWeDo">
              <h1 className="text-center">Updated News</h1>
            </center>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="column  col-lg-4 col-md-4 px-3">
              <div
                className={`post-module ${isHovered ? "hovered" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="thumbnail">
                  <div className="date">
                    <div className="day">27</div>
                    <div className="month">Mar</div>
                  </div>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
                </div>
                <div className="post-content">
                  <div className="category">Photos</div>
                  <h1 className="title">City Lights in New York</h1>
                  <h2 className="sub_title">The city that never sleeps.</h2>
                  <p className="description">
                    New York, the largest city in the U.S., is an architectural
                    marvel with plenty of historic monuments, magnificent
                    buildings and countless dazzling skyscrapers.
                  </p>
                  <div className="post-meta">
                    <span className="timestamp">
                      <i className="fa fa-clock-">o</i>6 mins ago
                    </span>
                    <span className="comments">
                      <i className="fa fa-comments"></i>
                      <a href="#">39 comments</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="column col-lg-4 col-md-4 px-3">
              <div className="post-module">
                <div className="thumbnail">
                  <div className="date">
                    <div className="day">27</div>
                    <div className="month">April</div>
                  </div>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
                </div>
                <div className="post-content">
                  <div className="category">Photos</div>
                  <h1 className="title">City Lights in New York</h1>
                  <h2 className="sub_title">The city that never sleeps.</h2>
                  <p className="description">
                    New York, the largest city in the U.S., is an architectural
                    marvel with plenty of historic monuments, magnificent
                    buildings and countless dazzling skyscrapers.
                  </p>
                  <div className="post-meta">
                    <span className="timestamp">
                      <i className="fa fa-clock-">o</i>6 mins ago
                    </span>
                    <span className="comments">
                      <i className="fa fa-comments"></i>
                      <a href="#">39 comments</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="column col-lg-4 col-md-4 px-3">
              <div className="post-module">
                <div className="thumbnail">
                  <div className="date">
                    <div className="day">27</div>
                    <div className="month">May</div>
                  </div>
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
                </div>
                <div className="post-content">
                  <div className="category">Photos</div>
                  <h1 className="title">City Lights in New York</h1>
                  <h2 className="sub_title">The city that never sleeps.</h2>
                  <p className="description">
                    New York, the largest city in the U.S., is an architectural
                    marvel with plenty of historic monuments, magnificent
                    buildings and countless dazzling skyscrapers.
                  </p>
                  <div className="post-meta">
                    <span className="timestamp">
                      <i className="fa fa-clock-">o</i>6 mins ago
                    </span>
                    <span className="comments">
                      <i className="fa fa-comments"></i>
                      <a href="#">39 comments</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
