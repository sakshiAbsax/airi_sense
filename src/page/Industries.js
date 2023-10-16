import React, { useState } from "react";
import industries from "../images/industries/industries.png";
import { Col, Container, Row } from "react-bootstrap";
import Pharma from "../images/industries/pharma.webp";
import Beverage from "../images/industries/beverage.jpg";
import Chemical from "../images/industries/chemical.jpg";
import Automotive from "../images/industries/automotive.png"; 
import Botaling from "../images/industries/botaling.webp";
import Electronics from "../images/industries/electronics.webp";
import Milk from "../images/industries/milk.jpg";
import Oil from "../images/industries/oil.webp";
import Rubber from "../images/industries/rubber.png";
import Sugar from "../images/industries/sugar.webp";
import Texttile from "../images/industries/texttile.webp";

export const Industries = () => {
  return (
    <div>
      <section id="our_pride">
        <div className="bnrImg">
          <img src={industries} width="100%" height="auto" />
        </div>
      </section>

      <div className="mb-2 pt-5 container aboutOverview">
        <div className="row  justify-content-center ">
          <div className="col-lg-10 whatWeDo">
            <h1
              className="text-center py-2 fw-bold"
              style={{ letterSpacing: "3px" }}
            >
              Industries
            </h1>
            <p className="text-right" style={{ textAlign: "justify" }}>
              Airisense provides automation solutions aimed at improving your
              manufacturing processes at all stages, regardless of type of
              industry. As specialists in logistics, we partner with you to
              harness technology and software expertise in crafting the perfect
              solution. We assist enterprises in their growth endeavors by
              uncovering the most suitable solutions for specific logistics
              operations. Our consulting and system expertise are underpinned by
              extensive experience. Collectively, we constitute a global,
              all-encompassing provider of automation and Industry 4.0
              solutions, presenting you with the same competitive advantages:
              quality, innovation, and technological excellence.​ ​
            </p>
          </div>
        </div>
      </div>

      <section className="section_padding partnerSec1 mt-4">
        <div className="container py-5">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
              <div className="whatWeDo">
                <h1
                  style={{
                    fontWeight: "600",
                    color: "#128c7e",
                    letterSpacing: "3px",
                  }}
                  className="text-start"
                >
                  Automotive
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Reduced product lifecycles, heightened personalization
                  demands, and emerging rivals are prompting a reassessment of
                  conventional procedures. Modern logistics technologies present
                  remedies that facilitate quicker and more effective
                  adaptability, employing mobile logistics resources that are
                  easily restructured or repurposed as circumstances dictate.
                  Instant access to the status of ongoing operations and
                  inventory enables a more precise synchronization of production
                  with market demand.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 mb-5">
              <div className="about_us_img">
                <img
                  src={Automotive}
                  width="100%"
                  height="400px"
                  className="rounded-circle img-hover-effect"
                  alt=""
                />
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
                <img
                  src={Pharma}
                  width="100%"
                  alt=""
                  height="400px"
                  className="rounded-circle img-zoom-out"
                />
              </div>
            </div>
            <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
              <div className="whatWeDo">
                <h1
                  style={{
                    fontWeight: "600",
                    color: "#128c7e",
                    letterSpacing: "3px",
                  }}
                  className="text-start"
                >
                  Pharma Industry
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Safety and regulatory compliance are paramount in
                  pharmaceutical warehousing. Achieving efficiency while meeting
                  serialization requirements requires tailored systems.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Airi-sense ensures your pharmaceutical supply chain complies
                  cost-effectively, using profound intralogistics expertise. Our
                  compliant track and trace software addresses evolving trends
                  like serialization, personalization, and a patient-centric
                  approach in pharmaceutical logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="aboutRoot"> 
        <section className="section_padding partnerSec1">
          <div className="container py-5">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
                <div className="whatWeDo">
                  <h1
                    style={{
                      fontWeight: "600",
                      color: "#fff",
                      letterSpacing: "3px",
                    }}
                    className="text-start"
                  >
                    Chemical
                  </h1>
                  <p
                    className="card-paragraph mt-4 text-light"
                    style={{ textAlign: "justify" }}
                  >
                    To enhance efficiency and reliability within the chemical
                    sector tailored logistics solutions are required. By
                    leveraging advanced logistics, inventory management, and
                    transportation systems, it ensures timely delivery of raw
                    materials and products while minimizing waste and costs.
                    These solutions enable the chemical industry to meet
                    production demands, reduce lead times, and enhance overall
                    supply chain performance, ultimately fostering growth and
                    competitiveness in a dynamic market landscape.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-lg-4 mb-5">
                <div className="about_us_img">
                  <img
                    src={Chemical}
                    width="100%"
                    alt=""
                    height="400px"
                    className="rounded-circle img-hover-effect"
                  />
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
                  <img
                    src={Beverage}
                    width="100%"
                    alt=""
                    height="400px"
                    className="rounded-circle img-zoom-out"
                  />
                </div>
              </div>
              <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
                <div className="whatWeDo">
                  <h1
                    style={{
                      fontWeight: "600",
                      color: "#fff",
                      letterSpacing: "3px",
                    }}
                    className="text-start"
                  >
                    Beverage
                  </h1>
                  <p
                    className="card-paragraph mt-4 text-light"
                    style={{ textAlign: "justify" }}
                  >
                    Is your business ready to manage the increasing variety of
                    beverage options as consumer preferences continue to evolve?
                    With the rising demand for new fruit-flavored drinks,
                    low-sugar alternatives, crossover beverages, craft brewery
                    offerings, and changing tastes, it's crucial to adapt
                    swiftly. Envision a flexible, responsive system designed to
                    meet the ever-shifting landscape of the food and beverage
                    industry. We provide tailor-made warehouse automation
                    solutions that are designed to stay relevant and effective
                    for your business and your customers' changing requirements.
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
                <h1
                  style={{
                    fontWeight: "600",
                    color: "#128c7e",
                    letterSpacing: "3px",
                  }}
                  className="text-start"
                >
                  Rubber
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  The automative industry offers comprehensive solutions to the
                  rubber industry, facilitating a seamless and efficient
                  production process. Through optimized logistics, timely
                  material deliveries, and supply chain management expertise, it
                  ensures a steady flow of raw materials to rubber
                  manufacturers. This partnership enhances cost-efficiency,
                  reduces production delays, and promotes sustainable practices
                  within the rubber sector, ultimately bolstering the overall
                  competitiveness and reliability of rubber products for the
                  automotive sector.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 mb-5">
              <div className="about_us_img">
                <img
                  src={Rubber}
                  width="100%"
                  alt=""
                  height="400px"
                  className="rounded-circle img-hover-effect "
                />
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
                <img
                  src={Milk}
                  width="100%"
                  alt=""
                  height="400px"
                  className="rounded-circle img-zoom-out"
                />
              </div>
            </div>
            <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
              <div className="whatWeDo">
                <h1
                  style={{
                    fontWeight: "600",
                    color: "#128c7e",
                    letterSpacing: "3px",
                  }}
                  className="text-start"
                >
                  Milk & Dairy Products
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                  Airi-sense offers agile, scalable automated warehouse
                  solutions for milk & dairy products, delivering flexibility
                  from production to sale. Customized for your
                  temperature-controlled operations, our installations guarantee
                  freshness, quality, cost reduction, and faster order
                  fulfillment. We assist manufacturers and distributors in
                  meeting customer demand and optimizing sales opportunities.
                  Utilize our software-driven, robot-based solutions to
                  efficiently manage storage needs for fast-moving items,
                  minimizing order processing time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="aboutRoot">
        <section className="section_padding partnerSec1">
          <div className="container py-5">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
                <div className="whatWeDo">
                  <h1
                    style={{
                      fontWeight: "600",
                      color: "#fff",
                      letterSpacing: "3px",
                    }}
                    className="text-start"
                  >
                    Sugar & Confectionery
                  </h1>
                  <p
                    className="card-paragraph mt-4 text-light"
                    style={{ textAlign: "justify" }}
                  >
                  The sugar and confectionery industry benefits from tailored warehousing automation solutions, which encompass efficient logistics, precise inventory management, and advanced packaging technologies. The market demands fresh confectionery varieties, innovative treats, artisanal sweets, and ever-changing taste preferences. Envision an adaptable, responsive system that empowers you to address the requirements of a rapidly shifting confectionery market. These elements combine to enhance production efficiency, cost-effectiveness, and the timely delivery of ingredients and finished goods, ensuring a seamless flow of sweetness to consumers.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-lg-4 mb-5">
                <div className="about_us_img">
                  <img
                    src={Sugar}
                    width="100%"
                    alt=""
                    height="400px"
                    className="rounded-circle img-hover-effect"
                  />
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
                  <img
                    src={Electronics}
                    width="100%"
                    alt=""
                    height="400px"
                    className="rounded-circle img-zoom-out"
                  />
                </div>
              </div>
              <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
                <div className="whatWeDo">
                  <h1
                    style={{
                      fontWeight: "600",
                      color: "#fff",
                      letterSpacing: "3px",
                    }}
                    className="text-start"
                  >
                    Electronics
                  </h1>
                  <p
                    className="card-paragraph mt-4 text-light"
                    style={{ textAlign: "justify" }}
                  >
                  The automative industry offers tailored solutions to the electronics industry, ensuring seamless operations. By leveraging advanced logistics, inventory management, and JIT (Just-In-Time) practices, it optimizes component sourcing and delivery. This results in reduced lead times, cost efficiencies, and improved production reliability for electronics manufacturers. Furthermore, it enhances supply chain visibility and flexibility, enabling rapid response to market demands and fluctuations in electronics production, ultimately fostering competitiveness and innovation in the electronics sector.
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
                <h1
                  style={{
                    fontWeight: "600",
                    color: "#128c7e",
                    letterSpacing: "3px",
                  }}
                  className="text-start"
                >
                  Oil
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                 The automotive supply chain industry offers critical solutions to the oil industry by optimizing logistics, reducing costs, and enhancing efficiency. It provides just-in-time inventory management, ensuring timely delivery of essential components for oil production and refining. Through advanced technology and efficient distribution networks, the automotive supply chain industry minimizes downtime, increases resource utilization, and ultimately contributes to the seamless functioning of the oil industry's complex operations.
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 mb-5">
              <div className="about_us_img">
                <img
                  src={Oil}
                  width="100%"
                  alt=""
                  height="400px"
                  className="rounded-circle img-hover-effect "
                />
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
                <img
                  src={Botaling}
                  width="100%"
                  alt=""
                  height="400px"
                  className="rounded-circle img-zoom-out"
                />
              </div>
            </div>
            <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
              <div className="whatWeDo">
                <h1
                  style={{
                    fontWeight: "600",
                    color: "#128c7e",
                    letterSpacing: "3px",
                  }}
                  className="text-start"
                >
                  Bottling
                </h1>
                <p
                  className="card-paragraph mt-4"
                  style={{ textAlign: "justify" }}
                >
                 Imagine an agile, responsive system tailored to navigate the dynamic terrain of the bottling industry. Through optimized logistics, inventory management, and advanced distribution networks, it ensures efficient sourcing of raw materials and timely delivery of finished products. This synergy between industries enhances production efficiency, reduces costs, and minimizes downtime, ultimately contributing to the success and competitiveness of the bottling sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="aboutRoot">
        <section className="section_padding partnerSec1">
          <div className="container py-5">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-8 col-lg-7 col-lg-6 mb-5">
                <div className="whatWeDo">
                  <h1
                    style={{
                      fontWeight: "600",
                      color: "#fff",
                      letterSpacing: "3px",
                    }}
                    className="text-start"
                  >
                    Textiles
                  </h1>
                  <p
                    className="card-paragraph mt-4 text-light"
                    style={{ textAlign: "justify" }}
                  >
                 In the fast-paced realm of fashion, speed to market is not merely important but absolutely essential for success in the textile industry. With product lifecycles shrinking, logistics solutions must be adaptable, modular, and scalable to align seamlessly with both consumer and industry demands.
                  </p>
                  <p className="text-light" style={{ textAlign: "justify" }}>
                  The textile industry adapts to evolving trends and shifting consumer behavior. Airi-Sense offers automation solutions and consulting services to optimize operations, expedite fulfillment, and adapt to the rise of e-commerce.
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-lg-4 mb-5">
                <div className="about_us_img">
                  <img
                    src={Texttile}
                    width="100%"
                    alt=""
                    height="400px"
                    className="rounded-circle img-hover-effect"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};
