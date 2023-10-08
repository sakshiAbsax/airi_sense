import React, { useState, useEffect } from "react";
import home_bnr from "../images/home_bnr.jpg";
import homeTech1 from "../images/homeTech1.jpg";
import { HomeAbout } from "./HomeAbout";

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
      <div className="bnrImg">
        <img src={home_bnr} width="100%" />
      </div>

      <div>
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

      <div className="aboutRoot text-white mb-5">
        <div className="  py-4  ">
          <div className="row justify-content-center  py-5">
            <div className="col-md-8 card px-4 py-3 shadow ">
              <div className="py-4 " style={{ color: "#6f309d" }}>
                <h2 className="text-center fw-bold">Our Root's</h2>
                <h3 className="text-center" style={{ letterSpacing: "3px" }}>
                  Shri Vasant Engineer's
                </h3>
              </div>

              <p className="text-center text-dark">
                Our Root's Shri Vasant Engineer's Shri Vasant Engineer’s – 2
                Decade Old parent company with established footprint from 2003
                in Indore, has been a rapid growing company, targeting change
                with New Focus into Conveying & Intralogistics domain.
              </p>
              <p className="text-center text-dark pb-3">
                Serving more than 233 clients true mix of Global, MNC & Giant
                Indian conglomerate spread across various industrial sector,
                with 103+ clients trusting us for repeat business for year over
                year.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="news">
        <div className="row py-4">
          <div className="col-md-12">
            <center>
              <h1>Updated News</h1>
            </center>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="column  col-lg-4 col-md-6 px-3">
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

            <div className="column col-lg-4 col-md-6 px-3">
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

            <div className="column col-lg-4 col-md-6 px-3">
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
