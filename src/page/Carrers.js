import React,{useState} from "react";
import carrer_bnnr from '../images/carrer_bnnr.jpg';
import graduates from "../images/graduates.svg";
import location from "../images/location.svg";
import professionals from "../images/professionals.svg";
import students from "../images/students.svg";
import slider1 from '../images/slider1.png'

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
      backgroundColor: "#ff0000",
    },
  ];
  const [activeTab, setActiveTab] = useState('Graduates');
  
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
              Why Join Airi-Sense?
            </h1>
            <p className="text-center" style={{ textAlign: "justify" }}>
              Rated amongst the fastest-growing companies, Chetu is built on a
              strong vision and corporate philosophy of continuous adaptation,
              client service, and professional growth. With one of the lowest
              attrition rates in the industry, Chetu's investment in its team
              members provides an ideal working environment that fosters
              opportunities to innovate, learn, and excel. Our Chetu Family is
              always growing, and we look forward to welcoming new members who
              are looking to expand their potential and place their careers on a
              path to success.{" "}
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
              What’s destination next? Is it better technology? A better you? Or
              a better community of makers? Wherever you desire to go, we give
              you the tools, the techniques, and the teams to navigate the
              journey. So you’re inspired to build what’s next, ensure your
              career never stands still, and navigate further together. Move
              forward. Take the world with you.
            </p>
          </div>
          <div className="row py-5">
            {items.map((item, index) => (
              <div
                className={`col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInLeft animated position-relative`}
                data-wow-delay={item.delay}
               key={index}
               onClick={() => setActiveTab(item.title)}  >
                <div className={`stories-txt ${item.className} py-2 me-3`}  style={{ backgroundColor: item.backgroundColor }}>
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
                  Airi sense delivers data-driven & robotic solutions for your
                  logistics automation alongside reliable, modular service
                  concepts. divlaborating with forward-thinking companies, we
                  are committed to setting new standards in warehouse automation
                  to provide future-proof products and solutions. As part of the
                  KUKA Group, our customers trust the competence of our
                  passionate employees – more than 14,000 people working across
                  the globe.
                </p>
              
              </div>
            </div>

            <div className="col-md-12 col-sm-12 col-lg-5 mb-5">
              <div className="about_us_img">
                <img src={slider1} width="100%" className="ps-5" alt="" />
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
                <img src={slider1} width="100%" className="ps-5" alt="" />
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
                  Airi sense delivers data-driven & robotic solutions for your
                  logistics automation alongside reliable, modular service
                  concepts. divlaborating with forward-thinking companies, we
                  are committed to setting new standards in warehouse automation
                  to provide future-proof products and solutions. As part of the
                  KUKA Group, our customers trust the competence of our
                  passionate employees – more than 14,000 people working across
                  the globe.
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
                  Airi sense delivers data-driven & robotic solutions for your
                  logistics automation alongside reliable, modular service
                  concepts. divlaborating with forward-thinking companies, we
                  are committed to setting new standards in warehouse automation
                  to provide future-proof products and solutions. As part of the
                  KUKA Group, our customers trust the competence of our
                  passionate employees – more than 14,000 people working across
                  the globe.
                </p>
              
              </div>
            </div>

            <div className="col-md-12 col-sm-12 col-lg-5 mb-5">
              <div className="about_us_img">
                <img src={slider1} width="100%" className="ps-5" alt="" />
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
                <img src={slider1} width="100%" className="ps-5" alt="" />
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
                  Airi sense delivers data-driven & robotic solutions for your
                  logistics automation alongside reliable, modular service
                  concepts. divlaborating with forward-thinking companies, we
                  are committed to setting new standards in warehouse automation
                  to provide future-proof products and solutions. As part of the
                  KUKA Group, our customers trust the competence of our
                  passionate employees – more than 14,000 people working across
                  the globe.
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
