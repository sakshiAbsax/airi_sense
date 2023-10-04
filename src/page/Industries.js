import React,{useState} from "react";
import industries from "../images/industries.jpg";
import { Col, Container, Row } from "react-bootstrap";
import ourpride from "../images/ourpride.png";

export const Industries = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <section id="our_pride">
        <div className="bnrImg">
          <img src={industries} width="100%" height="700px" />
        </div>
      </section>
      <section className="section_padding partnerSec1">
    <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
                <div className="about_us_text">
                    <h1 className="card-heading-1">Bharma</h1>
                    <p className="card-paragraph mt-4" style={{textAlign: "justify"}}>
                        We work with the world's best educators, to make studying abroad more accessible for students that are ready and eager to learn! Our GET Education Search Engine ensures <b>sat the click of a button,</b>tudents have access to global study options making an easier and more transparent process for them to make decisions about <b>their future.</b>
                    </p>

                    <p className="mt-3 card-paragraph" style={{textalign: "justify;"}}>We're proud of our partnerships with the world's leading universities and agencies, so we can <b>connect talent with opportunity.</b></p>

                    <button type="button" style={{boxShadow:"0 0 3px 3px #07d078;background-color: #07d078"}} className="btn mx-auto text-white mt-5">
                        Become a Platinum Partner
                    </button>
                </div>
            </div>

            <div className="col-md-4 col-lg-4 mb-5">
                <div className="about_us_img">
                    <img src="" width="100%" alt="" />
                </div>
            </div>
        </div>
    </div>
  
</section>
    </div>
  );
};
