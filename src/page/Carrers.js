import React, { useState } from "react";
import carrer_bnnr from "../images/carrer_bnnr.webp";
import graduates from "../images/graduates.svg";
import location from "../images/location.svg";
import professionals from "../images/professionals.svg";
import students from "../images/students.svg";
import careerSide from "../images/career/car-side.webp";

export const Carrers = () => {
  const items = [
    {
      title: "Experienced Professionals",
      imgSrc: professionals,
      backgroundColor: "#00a4ef",
    },
    {
      title: "Trainee",
      imgSrc: graduates,
      backgroundColor: "var(--orange)", // Define background color here
    },
    {
      title: "Students/Internships",
      imgSrc: students,
      backgroundColor: "#5ca904",
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

      {/* <div className="col-lg-10 whatWeDo">
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
          </div> */}

      <div style={{ backgroundColor: "#f1f1f1" }}>
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col col-md-8 col-sm-12 col-lg-7 mb-5">
              <div className="whatWeDo">
                <h1
                  style={{
                    fontWeight: "600",
                    letterSpacing: "3px",
                  }}
                  className="text-start list-group-item"
                >
                  Our Career
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Airi-Sense offers you a wide range of traditional and out of
                  the box technologies for automated warehousing that provide
                  quality, flexibility and efficiency.
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Modular, flexible and software-driven material handling
                  technologies
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Every customer has different requirements. Our customised
                  solutions with our inhouse products are perfectly harmonized
                  to your needs and guarantee the optimal flow of goods at a
                  minimal operational cost.
                </p>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  It doesn’t matter what you are looking for, we offer the
                  materials handling technology that perfectly meets your needs
                  from receiving to shipping.
                </p>
                {/* <Link to="/about">
                  {" "}
                  <div className="btn btn-lg btn-borderd button-1 my-3">
                    What We Do
                  </div>{" "}
                </Link> */}
              </div>
            </div>

            <div className="col-md-12 col-sm-12 col-lg-5 mb-5">
              <div className="about_us_img ps-5 pt-5">
                <img
                  src={careerSide}
                  className="image-fluid ms-2"
                  width="100%"
                  alt="productdescription"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2 pt-3 container ">
        <div className="row  justify-content-center  ">
          <div className="col-lg-10 whatWeDo pt-5">
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
          </div>
          <div className="row  justify-content-center pt-3">
            {items.map((item, index) => (
              <div
                className={`col-lg-3 col-md-3 col-sm-6 col-xs-12 py-3 me-3 wow fadeInLeft animated position-relative`}
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
                            Carrer
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
                          <img src="" width="100%" className="ps-5" alt="" />
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
                          <img src="" width="100%" className="ps-5" alt="" />
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
                            Carrer
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
                            Carrer
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
                          <img src="" width="100%" className="ps-5" alt="" />
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
