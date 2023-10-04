import React from "react";
import About_bnr from "../images/about_bnr.jpg";
import "./About.css";
import val1 from "../images/values/val-3.png";
import mission from "../images/mission.png";
import vision from "../images/vision.png";

export const About = () => {
  return (
    <>
      <div className="bnrImg">
        <img src={About_bnr} width="100%" height="700px" />
      </div>

      <div className="mb-2 pt-5 mt-3 container aboutOverview">
        <div className="row  justify-content-center ">
          <div className="col-lg-10">
            <p className="text-center">
              Airi-Sense is a global company with Swiss roots and one of the
              world's leading logistics automation companies. We are
              headquartered in Buchs/Aarau, Switzerland and stand for
              innovation, quality, industry-leading software and robotics
              technologies developed in-house.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="values  ">
        <div className="row py-4">
          <div className="col-md-12">
            <center>
              <h1>Values</h1>
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

        <div className="content">
          <div className=" valuecard">
            <div className="icon">
              <img src={val1} />
            </div>
            <p className="title">Agility</p>
            <p className="text">Click to see or edit your profile page.</p>
          </div>
          <div className=" valuecard">
            <div className="icon">
              <img src={val1} />
            </div>
            <p className="title">Innovation</p>
            <p className="text">Check all your favourites in one place.</p>
          </div>
          <div className=" valuecard">
            <div className="icon">
              <img src={val1} />
            </div>
            <p className="title">Respect</p>
            <p className="text">Add or change your contacts and links.</p>
          </div>
        </div>
        <div className="content mt-3">
          <div className="valuecard">
            <div className="icon">
              <img src={val1} />
            </div>
            <p className="title">Agility</p>
            <p className="text">Click to see or edit your profile page.</p>
          </div>
          <div className=" valuecard">
            <div className="icon">
              <img src={val1} />
            </div>
            <p className="title">Innovation</p>
            <p className="text">Check all your favourites in one place.</p>
          </div>
          <div className=" valuecard">
            <div className="icon">
              <img src={val1} />
            </div>
            <p className="title">Respect</p>
            <p className="text">Add or change your contacts and links.</p>
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
          <div className="col-md-8 mt-lg-3 pt-lg-5 ">
            <h2 className="py-3 text-center">Mission</h2>
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
        
          <div className="col-md-8 mt-lg-3 pt-lg-5 ">
            <h2 className="pb-3 text-center ">Vision</h2>
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
    </>
  );
};
