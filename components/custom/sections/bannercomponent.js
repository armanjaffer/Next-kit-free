/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/kindredux.png";
const BannerComponent = (props) => {
  const brandJsx =  (
    <div>
      <div className="spacer">
        <Container>
          <Row style = {{display: "flex"}}>
            <Col md="6" className="text-center" style={{ listStyle: "outside" }}>
              <h1 className="title font-bold">What is Kindred?</h1>
              <h5 className="subtitle">
              <br/>
                  <li>
                    <b>New Customers. </b>Kindred brings in new customers by leveraging its nonprofit network to connect your store with their values-aligned nonprofit supporters.
                  </li>
                  <br/>
                  <li>
                    <b>Embeddable Widget. </b>The Kindred plugin supplements your existing affiliate marketing program by visualizing the amount that will be donated to a nonprofit, which doubles AOV!
                  </li>
                  <br/>
                  <li>
                    <b>Seamless. </b>Integrates seamlessly within your Shopify store and your existing affiliate marketing program.
                  </li>
                  <br/>
                  <br/>                  <br/>

              </h5>
            </Col>
            <Col md="6">
              <iframe style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0}}
                src="https://www.youtube.com/embed/WNTKyK4IcaQ">
              </iframe>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="static-slider10">
        <Container>
          <Row style={{ display: "flex" }} className="">
            <Col lg="7" style={{verticalAlign: "middle" }}>
            <br/>
              <Image src={herobanner} alt="herobanner" ></Image>
            </Col>
            <Col lg="5" className="align-self-center " style={{verticalAlign: "middle" }} >
              <h1 className="title">More effective than ads & influencers</h1>
              <h6 className="subtitle op-8">
                With changes to cross-app tracking and your competitors investing in the same digitial ad strategies, Kindred provides a new way to stand out in a crowded field.
                <br/> <br/>
                Nonprofit supporters are better than influencer followers; their purchase intent is supercharged by the motivation to donate to a cause they support. 
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer">
        <Container>
          <Row>
            <Col lg="6" className="text-center" style={{padding: "50px"}}>
              <h1 className="title font-bold">Why Kindred?</h1>
              <h5 className="subtitle">
              <br/>
                  <li>
                    <b>Risk free - donate on conversion. </b>With Kindred, you only donate to a nonprofit when their supporter makes a purchase.
                  </li>
                  <br/>
                  <li>
                    <b>Corporate donations that help the bottom-line. </b> Kindred helps build up your credibility as a socially conscious brand with corporate donations that also bring in new customers.
                  </li>
                  <br/>
                  <li>
                    <b>Brand partnerships without the hassle. </b>Kindred automates partnerships with hundreds of nonprofits that will build the legitimacy of your brand without the extra overhead.
                  </li>
                  <br/>
              </h5>
            </Col>
            <Col lg="6">
              <iframe style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0}}
                src="https://www.youtube.com/embed/WNTKyK4IcaQ">
              </iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );

  return brandJsx;
};

export default BannerComponent;
