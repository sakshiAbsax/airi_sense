import React, { useState } from "react";
import industries from "../images/industries.png";
import { Col, Container, Row } from "react-bootstrap";
import Pharma from '../images/Pharma.webp';
import Beverage from '../images/Beverage.webp';
import chemical from '../images/chemical.webp';
import fmcg from '../images/fmcg.webp';
import fmeg from '../images/fmeg.webp';
import food from '../images/food.webp';

export const Industries = () => {


  return (
    <div>
      <section id="our_pride">
        <div className="bnrImg">
          <img src={industries} width="100%" height="700px" />
        </div>
      </section>

      <div className="mb-2 pt-5 container aboutOverview">
        <div className="row  justify-content-center ">
          <div className="col-lg-10">
            <h1 className="text-center py-2 fw-bold" style={{ color:"#6f309e" , letterSpacing:"3px"}}>Industries</h1>
            <p className="text-center" style={{textAlign:"justify"}}>
              Airi-Sense is a global company with Swiss roots and one of the
              world's leading logistics automation companies. We are
              headquartered in Buchs/Aarau, Switzerland and stand for
              innovation, quality, industry-leading software and robotics
              technologies developed in-house.{" "}
            </p>
          </div>
        </div>
      </div>

      <section className="section_padding partnerSec1 mt-4">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
              <div className="whatWeDo">
                <h1 style={{fontWeight:"600", color:"#6f309e" , letterSpacing:"3px"}} className="text-start">Bharma</h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  We work with the world's best educators, to make studying
                  abroad more accessible for students that are ready and eager
                  to learn! Our GET Education Search Engine ensures{" "}
                  <b>sat the click of a button,</b>tudents have access to global
                  study options making an easier and more transparent process
                  for them to make decisions about <b>their future.</b>
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 mb-5">
              <div className="about_us_img">
                <img src={Pharma} width="100%" height="400px" className="rounded-circle img-hover-effect" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_padding partnerSec1">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
          <div className="col-md-4 col-lg-4 mb-5">
              <div className="about_us_img">
                <img src={Beverage} width="100%" alt="" height="400px" className="rounded-circle img-zoom-out" />
              </div>
            </div>
            <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
              <div className="whatWeDo">
                <h1 style={{fontWeight:"600", color:"#6f309e" , letterSpacing:"3px"}} className="text-start">Beverage</h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  We work with the world's best educators, to make studying
                  abroad more accessible for students that are ready and eager
                  to learn! Our GET Education Search Engine ensures{" "}
                  <b>sat the click of a button,</b>tudents have access to global
                  study options making an easier and more transparent process
                  for them to make decisions about <b>their future.</b>
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <div style={{background: "linear-gradient(to top right, #1325e8 -5%, #8f10b7 100%"}}>
          <section className="section_padding partnerSec1">
            <div className="container py-5">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
                  <div className="whatWeDo">
                    <h1 style={{fontWeight:"600", color:"#fff" , letterSpacing:"3px"}} className="text-start">Chemical</h1>
                    <p
                      className="card-paragraph mt-4 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      We work with the world's best educators, to make studying
                      abroad more accessible for students that are ready and eager
                      to learn! Our GET Education Search Engine ensures{" "}
                      <b>sat the click of a button,</b>tudents have access to global
                      study options making an easier and more transparent process
                      for them to make decisions about <b>their future.</b>
                    </p>
                  </div>
                </div>

                <div className="col-md-4 col-lg-4 mb-5">
                  <div className="about_us_img">
                    <img src={chemical} width="100%" alt="" height="400px" className="rounded-circle img-hover-effect" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_padding partnerSec1">
            <div className="container py-5">
              <div className="row justify-content-between align-items-center">
              <div className="col-md-4 col-lg-4 mb-5">
                  <div className="about_us_img">
                    <img src={fmcg} width="100%" alt="" height="400px" className="rounded-circle img-zoom-out" />
                  </div>
                </div>
                <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
                  <div className="whatWeDo">
                    <h1 style={{fontWeight:"600", color:"#fff" , letterSpacing:"3px"}} className="text-start">FMCG</h1>
                    <p
                      className="card-paragraph mt-4 text-light"
                      style={{ textAlign: "justify" }}
                    >
                      We work with the world's best educators, to make studying
                      abroad more accessible for students that are ready and eager
                      to learn! Our GET Education Search Engine ensures{" "}
                      <b>sat the click of a button,</b>tudents have access to global
                      study options making an easier and more transparent process
                      for them to make decisions about <b>their future.</b>
                    </p>
                  </div>
                </div>

              
              </div>
            </div>
          </section>
      </div>
    

      <section className="section_padding partnerSec1">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
              <div className="whatWeDo">
                <h1 style={{fontWeight:"600", color:"#6f309e" , letterSpacing:"3px"}} className="text-start">FMEG</h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  We work with the world's best educators, to make studying
                  abroad more accessible for students that are ready and eager
                  to learn! Our GET Education Search Engine ensures{" "}
                  <b>sat the click of a button,</b>tudents have access to global
                  study options making an easier and more transparent process
                  for them to make decisions about <b>their future.</b>
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 mb-5">
              <div className="about_us_img">
                <img src={fmeg} width="100%" alt="" height="400px" className="rounded-circle img-hover-effect " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_padding partnerSec1">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
          <div className="col-md-4 col-lg-4 mb-5">
              <div className="about_us_img">
                <img src={food} width="100%" alt="" height="400px" className="rounded-circle img-zoom-out" />
              </div>
            </div>
            <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
              <div className="whatWeDo">
                <h1 style={{fontWeight:"600", color:"#6f309e" , letterSpacing:"3px"}} className="text-start">Food</h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  We work with the world's best educators, to make studying
                  abroad more accessible for students that are ready and eager
                  to learn! Our GET Education Search Engine ensures{" "}
                  <b>sat the click of a button,</b>tudents have access to global
                  study options making an easier and more transparent process
                  for them to make decisions about <b>their future.</b>
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};
