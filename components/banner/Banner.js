import React from "react";
import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";

const Banner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">Fundraise by helping your supporters find brands they&apos;ll love.</h1>
            <h4 className="subtitle font-light">
              Partner with socially conscious brands and earn up to 30% of purchases.
            </h4>
            <a
              href="emailto:armanjaffer@gmail.com"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              Join waitlist
            </a>
            <Link href="/">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                For Businesses
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
