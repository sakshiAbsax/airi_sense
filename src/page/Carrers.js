import React, { useState } from "react";
import carrer_bnnr from "../images/carrer_bnnr.webp";
import graduates from "../images/graduates.svg";
import location from "../images/location.svg";
import professionals from "../images/professionals.svg";
import students from "../images/students.svg";
import slider1 from "../images/slider1.png";

export const Carrers = () => {
  const items = [
    {
      title: "Graduates",
      imgSrc: graduates,
      backgroundColor: "var(--orange)", // Define background color here
    },
    {
      title: "Experienced Professionals",
      imgSrc: professionals,
      backgroundColor: "#00a4ef",
    },
    {
      title: "Students/Internships",
      imgSrc: students,
      backgroundColor: "#5ca904",
    },
    {
      title: "Consulting",
      imgSrc: location,
      backgroundColor: "#ffb900",
    },
  ];
  const [activeTab, setActiveTab] = useState("Graduates");

  return (
    <div>
      <section id="our_pride">
        <div className="bnrImg">
          <img src={carrer_bnnr} width="100%" height="auto" />
        </div>
      </section>
      <div className="mb-2 pt-5 mt-3 container ">
        <div className="row  justify-content-center  ">
          <div className="col-lg-10 whatWeDo">
            <h1
              style={{
                fontWeight: "600",
                letterSpacing: "3px",
              }}
              className="text-center"
            >
              Career
            </h1>
            <p className="text-justify">
              We are a dynamic and youthful team comprised of engineers,
              designers, and business professionals who share a passion for
              innovation and creating value for our clients. The Airi-Sense team
              boasts extensive experience and expertise in their respective
              fields, and they collaborate seamlessly to craft groundbreaking
              solutions.
            </p>
            <p className="text-justify">
              We hold a steadfast belief in nurturing and empowering our young
              talents, enabling them to confront the world's most intricate and
              pioneering challenges with technology and zeal. Over our six-year
              journey, we've witnessed numerous transformations among our fresh
              academic talents, who have consistently delivered top-tier
              products and solutions.
            </p>
            <p className="text-justify">
              Our dedication to fostering an environment that champions
              innovation is unwavering, and we take immense pride in doing so.
              Our values are the bedrock of our culture, and we endeavor to
              establish a workplace that promotes both freedom and
              responsibility while encouraging self-governance for all.
            </p>
          </div>
          <div className="col-lg-10 whatWeDo py-3">
            <h1
              style={{
                fontWeight: "600",
                letterSpacing: "3px",
              }}
              className="text-center pb-3"
            >
              Explore Opportunities
            </h1>
            <p>
              Our primary emphasis on nurturing a culture of creative
              problem-solving not only encourages our employees to think
              innovatively within the workplace but also empowers them to take
              on challenges beyond their professional lives. This makes
              Airi-Sense an ideal platform for individuals looking to explore
              career opportunities.
            </p>
            <p>
              We wholeheartedly back employees who aspire to make a significant
              impact in their chosen fields by channeling their passion and
              energy. Our guidance and mentorship provide them with the
              essential tools to explore new career horizons and reach their
              full potential.
            </p>
          </div>
          <div className="row py-5">
            {items.map((item, index) => (
              <div
                className={`col-lg-3 col-md-3 col-sm-6 col-xs-12 py-3 wow fadeInLeft animated position-relative`}
                data-wow-delay={item.delay}
                key={index}
                onClick={() => setActiveTab(item.title)}
              >
                <div
                  className={`stories-txt ${item.className} py-2 me-3`}
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  <a
                    className={item.color}
                    href={item.link}
                    aria-label={`Know about ${item.title}`}
                    title={item.title}
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="img-responsive w-100"
                    />
                    <p
                      className="highlight-text w-100 text-start text-white"
                      style={{
                        position: "absolute",
                        left: "25px",
                        bottom: " 139px",
                        fontSize: "20px",
                      }}
                    >
                      <strong>{item.title}</strong>
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        {activeTab && (
          <div>
            {activeTab === "Graduates" && (
              <div>
                <section className="section_padding partnerSec1">
                  <div className="container py-5">
                    <div className="row justify-content-between align-items-center">
                      <div className="col col-md-8 col-sm-12 col-lg-7 mb-5">
                        <div className="whatWeDo">
                          <h1
                            style={{
                              fontWeight: "600",
                              letterSpacing: "3px",
                            }}
                            className="text-start"
                          >
                            About
                          </h1>
                          <p
                            className="card-paragraph mt-4"
                            style={{ textAlign: "justify" }}
                          >
                            Airi sense delivers data-driven & robotic solutions
                            for your logistics automation alongside reliable,
                            modular service concepts. divlaborating with
                            forward-thinking companies, we are committed to
                            setting new standards in warehouse automation to
                            provide future-proof products and solutions. As part
                            of the KUKA Group, our customers trust the
                            competence of our passionate employees – more than
                            14,000 people working across the globe.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12 col-lg-5 mb-5">
                        <div className="about_us_img">
                          <img
                            src={slider1}
                            width="100%"
                            className="ps-5"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
            {activeTab === "Experienced Professionals" && (
              <div>
                <section className="section_padding partnerSec1">
                  <div className="container py-5">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-12 col-sm-12 col-lg-5 mb-5">
                        <div className="about_us_img">
                          <img
                            src={slider1}
                            width="100%"
                            className="ps-5"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col col-md-8 col-sm-12 col-lg-6 mb-5">
                        <div className="whatWeDo">
                          <h1
                            style={{
                              fontWeight: "600",
                              letterSpacing: "3px",
                            }}
                            className="text-start"
                          >
                            About
                          </h1>
                          <p
                            className="card-paragraph mt-4"
                            style={{ textAlign: "justify" }}
                          >
                            Airi sense delivers data-driven & robotic solutions
                            for your logistics automation alongside reliable,
                            modular service concepts. divlaborating with
                            forward-thinking companies, we are committed to
                            setting new standards in warehouse automation to
                            provide future-proof products and solutions. As part
                            of the KUKA Group, our customers trust the
                            competence of our passionate employees – more than
                            14,000 people working across the globe.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
            {activeTab === "Students/Internships" && (
              <div>
                <section className="section_padding partnerSec1">
                  <div className="container py-5">
                    <div className="row justify-content-between align-items-center">
                      <div className="col col-md-8 col-sm-12 col-lg-7 mb-5">
                        <div className="whatWeDo">
                          <h1
                            style={{
                              fontWeight: "600",
                              letterSpacing: "3px",
                            }}
                            className="text-start"
                          >
                            About
                          </h1>
                          <p
                            className="card-paragraph mt-4"
                            style={{ textAlign: "justify" }}
                          >
                            Airi sense delivers data-driven & robotic solutions
                            for your logistics automation alongside reliable,
                            modular service concepts. divlaborating with
                            forward-thinking companies, we are committed to
                            setting new standards in warehouse automation to
                            provide future-proof products and solutions. As part
                            of the KUKA Group, our customers trust the
                            competence of our passionate employees – more than
                            14,000 people working across the globe.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12 col-lg-5 mb-5">
                        <div className="about_us_img">
                          <img
                            src={slider1}
                            width="100%"
                            className="ps-5"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
            {activeTab === "Consulting" && (
              <div>
                <section className="section_padding partnerSec1">
                  <div className="container py-5">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-12 col-sm-12 col-lg-5 mb-5">
                        <div className="about_us_img">
                          <img
                            src={slider1}
                            width="100%"
                            className="ps-5"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col col-md-8 col-sm-12 col-lg-6 mb-5">
                        <div className="whatWeDo">
                          <h1
                            style={{
                              fontWeight: "600",
                              letterSpacing: "3px",
                            }}
                            className="text-start"
                          >
                            About
                          </h1>
                          <p
                            className="card-paragraph mt-4"
                            style={{ textAlign: "justify" }}
                          >
                            Airi sense delivers data-driven & robotic solutions
                            for your logistics automation alongside reliable,
                            modular service concepts. divlaborating with
                            forward-thinking companies, we are committed to
                            setting new standards in warehouse automation to
                            provide future-proof products and solutions. As part
                            of the KUKA Group, our customers trust the
                            competence of our passionate employees – more than
                            14,000 people working across the globe.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
