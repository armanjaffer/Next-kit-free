import React from "react";
import { Row, Col, Container, Form } from "reactstrap";
import Image from "next/image";
import banner from "../../../assets/images/form-banners/banner1/banner-img.png";

const FormBannerComponent = () => {
  function handleSubmit(e) {
    e.preventDefault();
    window.location.assign('https://f3mt7yner02.typeform.com/to/Z34nNWeD');
  }

  return (
    <div>
      <div className="bg-light">
        <section>
          <div id="banner1" className="banner spacer">
            <Container>
              <Row>
                <Col lg="5" md="7" className="align-self-center">
                  <h2 className="title font-bold">
                    Join the Kindred waitlist! 
                  </h2>
                  <p className="m-t-40 m-b-30">
                    Expand your customer base with nonprofit supporters! Join the waistlist and we&apos;ll let you know as soon as we&apos;ve matched you with values-aligned nonprofits.
                  </p>
                  <Form className="m-t-40">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email Address"
                      className="font-16"
                    />
                    <input
                      type="submit"
                      onClick={handleSubmit}
                      value="Get Started"
                      className="bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                    />
                  </Form>
                </Col>
                <Col lg="6" md="5" className="align-self-center ml-auto">
                  <Image
                    src={banner}
                    alt="We are Digital Agency"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormBannerComponent;
