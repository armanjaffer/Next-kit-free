import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              Acquire new customers by funding nonprofits
            </h1>
            <h4 className="subtitle font-light">
              A risk-free opportunity to reach new audiences while doing good.
            </h4>
            <a
              href="https://f3mt7yner02.typeform.com/to/Z34nNWeD"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Join waitlist
            </a>
            <Link href="/nonprofits">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                For Nonprofits
              </a>
            </Link>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
