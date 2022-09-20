/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import herobanner from "../../../assets/images/kindredux.png";
const NonprofitBannerComponent = (props) => {

  const nonprofitJsx = (<div></div>);
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
                    <b>No-effort, lucrative brand partnerships. </b>Kindred allows you to select from a list of suggested brands that are willing to share proceeds of your supporters purchases. Just like an influencer, your nonprofit is compensated every time a supporter purchases a product from your link.
                  </li>
                  <br/>
                  <li>
                    <b>A complimentary fundraising channel. </b>Kindred doesn’t replace your existing digital donation platform, it supplements it by using your partner brand’s existing affiliate marketing program to make direct deposits to your bank account.
                  </li>
                  <br/>
                  <li>
                    <b>Embeddable component library. </b>Kindred provides simple “shop with us” buttons you can customize and easily integrate into your website, fundraising emails, and social media pages.
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
              <h1 className="title">Partner with brands that *truly* share your values.</h1>
              <h6 className="subtitle op-8">
                We understand that your reputation is everything. We rigorously vet our partner brands and ensure that our brand partners are willing to connect with you to answer questions about their practices.
                <br/> <br/>
                If you have suggestions of brands that you believe would be a good fit for you, we can reach out to add them to our list of partnered brands.
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
                    <b>Raising money is hard. </b>Supporters are tired of being asked to donate, but they are willing to shop with brands that have been vetted by nonprofits that they trust. Our goal is to increase your online donations by 5-10% with almost no changes or effort.
                  </li>
                  <br/>
                  <li>
                    <b>Your supporters already shop, why not put it to good use? </b>Unlike online donations, using Kindred provides your supporters a product that they would have likely purchased regardless.
                  </li>
                  <br/>
                  <li>
                    <b>Support brands that are living by your values. </b>There are a lot of brands out there, but there may be far fewer that are working to create the world your organization aspires for. Partnering with these select brands increases the scope of your impact by highlighting companies that are doing things right.
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

export default NonprofitBannerComponent;
