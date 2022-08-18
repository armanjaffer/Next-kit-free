/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/kindredux.png";
const BannerComponent = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row>
            <Col md="6" className="text-center">
              <h1 className="title font-bold">What is Kindred?</h1>
              <h5 className="subtitle">
              <br/>
                  <li>
                    Build brand awarenss with millions of nonprofit supporters who are motivated to purchase from you.
                  </li>
                  <br/>
                  <li>
                    Integrates seamlessly within your Shopify store and your existing affiliate marketing program.
                  </li>
                  <br/>
                  <li>
                    Flat 5% charge for customer acquisition + donation amount.
                  </li>
                  <br/>                  <br/>

              </h5>
            </Col>
            <Col md="6">
              <iframe style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0}}
                src="https://www.youtube.com/embed/RvRhUHTV_8k">
              </iframe>
            </Col>
          </Row>
          
        </Container>
      </div>

      <div className="static-slider10">
        <Container>
          <Row className="">
            <Col md="4" className="align-self-center ">
              <h1 className="title">More effective than ads & influencers</h1>
              <h6 className="subtitle op-8">
                With changes to cross-app tracking and your competitors investing in the same digitial ad strategies, Kindred provides a new way to stand out in a crowded field.
                <br/> <br/>
                Nonprofit supporters are better than influencer followers; their purchase intent is supercharged by the motivation to donate to a cause they support. 
              </h6>
            </Col>
            <Col md="8">
              <Image src={herobanner} alt="herobanner"></Image>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="static-slider3">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="align-self-center text-center">
              <h1 className="title">
                I’m Johanthan Doe, an{" "}
                <b className="font-bold">
                  Entreprenuer, Designer & Front-end Developer
                </b>
                , Making{" "}
              </h1>
              <a
                className="btn btn-danger btn-md btn-arrow m-t-20"
                data-toggle="collapse"
                href=""
              >
                <span>
                  Checkout My Work <i className="ti-arrow-right"></i>
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponent;
