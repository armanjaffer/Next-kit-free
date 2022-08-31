import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const CallToAction = () => {
  return (
    <div className="coming-soon" id="coming">
      <Container className="py-5 mt-5">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div>
                <h2 className="title text-white font-weight-bold">
                  You&apos;ve got questions and we&apos;ve got answers.
                </h2>
                <h6 className="subtitle font-light text-white">
                  Reach out if you have a question that is not answered below!
                </h6>
                <Button
                  className="btn btn-dark m-r-20 btn-md m-t-30"
                  onClick={() => window.location = 'mailto:armanjaffer@gmail.com'}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
