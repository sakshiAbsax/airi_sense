import React from "react";
import about_bnr from "../images/about_bnr.jpg";
import "./About.css";
import mission from "../images/mission.png";
import vision from "../images/vision.png";
import aboutHistory from "../images/aboutHistor.webp";
import val1 from "../images/values/agility.png";
import val2 from "../images/values/inovation.png";
import val3 from "../images/values/respect.png";
import val4 from "../images/values/people.png";
import val5 from "../images/values/customer.png";
import val6 from "../images/values/intgrity.png";

export const About = () => {
  return (
    <>
      <div className="bnrImg">
        <img src={about_bnr} width="100%" height="auto" />
      </div>

      <div className=" py-5" style={{ backgroundColor: "#f1f1f1" }}>
        <div className="container">
          <div className=" row  justify-content-center d-flex">
            <div className="col-lg-7 col-md-12 col-sm-12 whatWeDo">
              <h1
                className=" fw-bold text-start  "
                style={{ color: "#128c7e", letterSpacing: "6px" }}
              >
                History
              </h1>
              <div className=" pt-2 whatWeDo">
                <p className="mt-3">
                  Airi-Sense, backed by the two-decade-old Automation &
                  Solutions provider Vasant Engineer's, boasts a rich history of
                  delivering proven solutions since its establishment in 2003.
                </p>
                <p className="mt-2">
                  Airi-Sense born in Dec’22 with a clear vision: to offer
                  cutting-edge Material handling & Intralogistics automation
                  solutions to its existing clients while simultaneously
                  expanding its customer base.
                </p>
                <p className="mt-2">
                  As time passed, it became evident that many customers were
                  grappling with material handling and management challenges
                  within their plants and warehouses. The solutions available in
                  the market often fell short of meeting their specific needs.
                </p>
                <p className="mt-2">
                  Airi-Sense steps into this arena armed with a fresh and
                  experienced team possessing profound expertise in material
                  handling & Intralogistics automation, and a blend of both
                  traditional and state-of-the-art robotics.
                </p>
              </div>
            </div>
            <div className=" pt-5 col-lg-5 col-md-12 col-sm-12">
              <div className="ps-lg-5 ms-3 ms-sm-0 ">
                <img src={aboutHistory} width="auto" height="500px" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutRoot text-white mb-5">
        <div className=" py-4  ">
          <div className="row justify-content-center  py-5">
            <div className="col-md-8 card px-4 py-3 shadow ">
              <div className="py-4 ourroootSection">
                <h2 className="text-center fw-bold">Our Root's</h2>
                <h3 className="text-center" style={{ letterSpacing: "3px" }}>
                  Shri Vasant Engineer's
                </h3>
              </div>

              <p className="text-justify outRoot">
                  Born out of Vasant Engineer's, a well-rooted parent company
                  with a two-decade legacy dating back to 2003 from Indore,
                  having experienced impressive growth and is now directing its
                  energies toward the Material Handling and Intralogistics
                  sector with renewed vigor.
                </p>
                <p className="text-justify outRoot pb-3">
                  Our extensive clientele, exceeding beyond 233, comprises a
                  diverse blend of global enterprises, multinational
                  corporations, and influential Indian conglomerates spanning
                  various industrial domains. Remarkably, more than 103 of these
                  esteemed clients place their trust in us year after year,
                  making us their preferred choice for sustained business
                  partnerships.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 mission">
        <div className="row clearfix pb-lg-3">
          <div className="col-md-3 hover-zoom pt-2 mt-lg-3 ps-3">
            <div className="img-back text-end">
              <img src={mission} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-md-8 mt-lg-3 pt-lg-5 whatWeDo ">
            <h1
              className="py-3 text-center fw-bold"
              style={{ color: "#128c7e", letterSpacing: "3px" }}
            >
              Mission
            </h1>
            <p className="py-2 px-3">
              To deliver reliable, secure, & scalable solutions enabling our
              clients to innovate, collaborate, and scale their operations
              seamlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="container  vision">
        <div className="row clearfix pb-lg-5 justify-content-end ">
          <div className="col-md-8 mt-lg-3 pt-lg-5 whatWeDo ">
            <h1
              className="pb-3 text-center fw-bold"
              style={{ color: "#128c7e", letterSpacing: "3px" }}
            >
              Vision
            </h1>
            <p className=" py-2 px-3">
              To deliver reliable, secure, & scalable solutions enabling our
              clients to innovate, collaborate, and scale their operations
              seamlessly.
            </p>
          </div>

          <div className="col-md-3 hover-zoom pt-2 mt-lg-3">
            <div className="img-back text-start">
              <img src={vision} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="values  py-5 mt-5 aboutRoot">
        <div className="row pb-3  ">
          <div className="col-md-12">
            <center>
              <h1
                className="text-light fw-bold text-white"
                style={{fontSize:"55px",color:"white !important", letterSpacing: "3px" }}
              >
                Values
              </h1>
            </center>
          </div>
        </div>

        <div className="about">
          <a
            className="bg_links social portfolio"
            href="https://www.rafaelalucas.com"
            target="_blank"
          >
            <span className="icon"></span>
          </a>
          <a
            className="bg_links social dribbble"
            href="https://dribbble.com/rafaelalucas"
            target="_blank"
          >
            <span className="icon"></span>
          </a>
          <a
            className="bg_links social linkedin"
            href="https://www.linkedin.com/in/rafaelalucas/"
            target="_blank"
          >
            <span className="icon"></span>
          </a>
          <a className="bg_links logo"></a>
        </div>

        <div className="content ">
          <div className="valuecard">
            <div className="icon">
              <img src={val1} />
            </div>
            <p className="title">Agility</p>
            <p className="text">Adapting swiftly and rejuvenating oneself in response to rapid changes is a key skill for navigating today's dynamic world.</p>
          </div>
          <div className=" valuecard">
            <div className="icon">
              <img src={val2} />
            </div>
            <p className="title">Innovation</p>
            <p className="text">Continuously seeking innovative ways to enhance support for employees, clients, and the entire organization's success.​</p>
          </div>
          <div className=" valuecard">
            <div className="icon">
              <img src={val3} />
            </div>
            <p className="title">Respect</p>
            <p className="text">To demonstrate respect, one must practice openness, honesty, and act consistently with unwavering integrity.​</p>
          </div>
        </div>
        <div className="content mt-3">
          <div className="valuecard">
            <div className="icon">
              <img src={val4} />
            </div>
            <p className="title">People</p>
            <p className="text">The invaluable assets of an organization's success include the distinctive qualities and perspectives of each individual within it.</p>
          </div>
          <div className=" valuecard">
            <div className="icon">
              <img src={val5} />
            </div>
            <p className="title">Customer Centricity</p>
            <p className="text">We are wholeheartedly dedicated to consistently delivering exceptional service, always striving to make our customers happy. </p>
          </div>
          <div className=" valuecard">
            <div className="icon">
              <img src={val6} />
            </div>
            <p className="title">Integrity</p>
            <p className="text">Unwavering commitment to embrace accountability and take full responsibility for every action to be undertaken.</p>
          </div>
        </div>
      </div>
    </>
  );
};
