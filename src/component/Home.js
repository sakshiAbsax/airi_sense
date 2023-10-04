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
        <img src={home_bnr} width="100%" height="700px" />
      </div>

      <div className=" py-5 mt-5">
        <HomeAbout />
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
          <div className="column col-md-4 px-3">
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

          <div className="column col-md-4 px-3">
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

          <div className="column col-md-4 px-3">
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

      <div className="py-4">
        <div className="row pb-2">
          <div className="col-md-12">
            <center>
              <h1>Technologies</h1>
            </center>
          </div>
        </div>

        <div className="container my-3">
          <div className="row text-center justify-content-center">
            <div className="col-md-3 col-sm-6">
              <div
                className="box-tech my-3"
                style={{
                  backgroundImage:
                    'url("https://media.geeksforgeeks.org/' +
                    'wp-content/uploads/20201221222410/download3.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="content">
                  <p>TECHNO-1</p>
                  <div className="desc">
                    <center>
                      <div className="line"></div>
                    </center>
                    <p className="text-black">
                      Out-of-the box CMS, E-commerce, PIM and Marketing
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box-tech my-3">
                <div className="content">
                  <center>
                    <img
                      src="https://www.e-bureauet.dk/media/1357/icon-sitecore.png"
                      alt=""
                    />
                  </center>
                  <p>TECHNO-2</p>
                  <div className="desc">
                    <center>
                      <div className="line"></div>
                    </center>
                    <p>
                      Out-of-the box CMS, E-commerce, PIM and Marketing
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div
                className="box-tech my-3"
                style={{
                  backgroundImage:
                    'url("https://media.geeksforgeeks.org/' +
                    'wp-content/uploads/20201221222410/download3.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="content">
                  <center>
                    <img
                      src="https://www.e-bureauet.dk/media/1358/icon-umbraco.png"
                      alt=""
                    />
                  </center>
                  <p>TECHNO-3</p>
                  <div className="desc">
                    <center>
                      <div className="line"></div>
                    </center>
                    <p>
                      Out-of-the box CMS, E-commerce, PIM and Marketing
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box-tech my-3">
                <div className="content">
                  <center>
                    <img
                      src="https://www.e-bureauet.dk/media/1300/icon-abobe-captivate.png"
                      alt=""
                    />
                  </center>
                  <p>TECHNO-4</p>
                  <div className="desc">
                    <center>
                      <div className="line"></div>
                    </center>
                    <p>
                      Adobe Captivate is one of the leading eLearning authoring
                      tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box-tech my-3">
                <div className="content">
                  <center>
                    <img
                      src="https://www.e-bureauet.dk/media/1357/icon-sitecore.png"
                      alt=""
                    />
                  </center>
                  <p>TECHNO-5</p>
                  <div className="desc">
                    <center>
                      <div className="line"></div>
                    </center>
                    <p>
                      Out-of-the box CMS, E-commerce, PIM and Marketing
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box-tech my-3">
                <div className="content">
                  <center>
                    <img
                      src="https://www.e-bureauet.dk/media/1358/icon-umbraco.png"
                      alt=""
                    />
                  </center>
                  <p>TECHNO-6</p>
                  <div className="desc">
                    <center>
                      <div className="line"></div>
                    </center>
                    <p>
                      Out-of-the box CMS, E-commerce, PIM and Marketing
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box-tech my-3">
                <div className="content">
                  <center>
                    <img
                      src="https://www.e-bureauet.dk/media/1300/icon-abobe-captivate.png"
                      alt=""
                    />
                  </center>
                  <p>TECHNO-7</p>
                  <div className="desc">
                    <center>
                      <div className="line"></div>
                    </center>
                    <p>
                      Adobe Captivate is one of the leading eLearning authoring
                      tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutRoot bg-dark text-white">
        <div className=" container pb-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="py-4">
                <h2 className="text-center">Our Root's</h2>
                <h3 className="text-center">Shri Vasant Engineer's</h3>
              </div>

              <p>
                Our Root's Shri Vasant Engineer's Shri Vasant Engineer’s – 2
                Decade Old parent company with established footprint from 2003
                in Indore, has been a rapid growing company, targeting change
                with New Focus into Conveying & Intralogistics domain.
              </p>
              <p>
                Serving more than 233 clients true mix of Global, MNC & Giant
                Indian conglomerate spread across various industrial sector,
                with 103+ clients trusting us for repeat business for year over
                year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
