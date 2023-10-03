import React from "react";
import industries from "../images/industries.jpg";
import { Col, Container, Row } from "react-bootstrap";
import ourpride from "../images/ourpride.png";

export const Industries = () => {
  return (
    <div>
      <section id="our_pride">
        <div className="bnrImg">
          <img src={industries} width="100%" height="700px" />
        </div>
        <div className="">
          <Container>
            <Row className="d-flex">
              <Col lg={7} xs={12} md={7}>
                <div className="mt-5 pt-5 whatWeDo">
                  <h2 className="text-start"> Our Pride </h2>
                  <p className="mt-4">
                    We have been industrial solution business since 2003, and
                    had seen many up's and down, we at every juncture of
                    business remembers how our customer's have supported us,
                    guided us and helped us to be what we are today.
                  </p>
                  <p className="mt-4">
                    We have been proudly associated with +233 customer's along
                    different industrial vertical's, geographies, for different
                    application's.{" "}
                  </p>
                  <p className="mt-4">
                    We represents our reach and market trust & as we showcase
                    some of them but that's not the end, we still thanks to all
                    our customer's who has invested their thrust & time in us to
                    ensure we grow together{" "}
                  </p>
                </div>
              </Col>

              <Col lg={5} xs={12} md={5}>
                <div className="ps-5 pt-5">
                  <img src={ourpride} width="auto" height="500px" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="container">

      
        <div className="row">
          <div className="col-lg-6">

        
        <div class="blog-card">
    <div class="meta">
      <div class="photo" style={{backgroundImage: "url(https://static.wixstatic.com/media/11062b_1f1e25a3091544e6913eb34f8a8aba4a~mv2.jpg/v1/fill/w_277,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_1f1e25a3091544e6913eb34f8a8aba4a~mv2.jpg)"}}></div>
      <ul class="details">
        <li class="author"><a href="#">Pharma</a></li>
        <li class="date">Aug. 24, 2015</li>
        <li class="tags">
          {/* <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul> */}
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>Learning to Code</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  </div>
  <div className="col-lg-6">
  <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style={{backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"}}></div>
      <ul class="details">
        <li class="author"><a href="#">Jane Doe</a></li>
        <li class="date">July. 15, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>Mastering the Language</h1>
      <h2>Java is not the same as JavaScript</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  </div>
        </div>
        </div>
      </section>
    </div>
  );
};
