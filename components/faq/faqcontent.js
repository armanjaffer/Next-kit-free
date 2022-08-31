import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const FaqContent = () => {
    return (
        <div className="hello" >
            <Container>
                <Row>
                    <Col md="12" className="faq-col">
                        <div className="faq-content">
                            <h1> General</h1>
                        </div>
                        <div className="faq-content">
                            <h3 >Who is behind Kindred?</h3>
                            Kindred is a bootstrapped project built by Arman Jaffer with support from South Park Commons.
                             Arman has previously worked at the Chan Zuckerberg Initiative, the Aspen Institute, the White House, and Google. He additional experience partnering with nonprofits such as Gradient Learning and Amnesty International.
                        </div>
                        <div className="faq-content">
                            <h3>How does Kindred make money?</h3>
                            At the moment, Kindred does not generate revenue. The goal is to eventually build Kindred into a venture-scale business, but the short-term goal is to validate the hypothesis that customers will be willing to purchase
                             from brands endorsed by nonprofits that they support. Beta customers will be grandfathered into discounted pricing.
                        </div>
                        <div className="faq-content">
                            <h3>What does Kindred provide?</h3>
                            <li>
                                A rigorously optimized component that shows up in partner brand’s stores that communicate the dollar value in the customer’s cart that will be donated to the select nonprofit. Affiliate marketing programs do not provide this tool because traditional affiliate marketing hides the commission; with Kindred donations, the customer wants to know how much will go back to their nonprofit!
                            </li>
                            <li>
                                Kindred provides embeddable “shop with us” widgets (pre-populated with affiliate link) that nonprofits can embed within their websites, email outreach and social media.
                            </li>
                            <li>
                                Kindred offers a network of nonprofits and brands, increasing the quantity and quality of lucrative partnerships, with very little required capacity from its partners.
                            </li>
                        </div>
                        <div className="faq-content">
                            <h3>How long do fundraisers run?</h3>
                            It depends on our partners’ constraints and interest. We recommend that our affiliate partners use an evergreen affiliate link, but think strategically about how and when to highlight partner brands (e.g. during the
                             holiday shopping season). We work with nonprofits to figure out the best engagement strategy and work with brands to ensure unprofitable partnerships are terminated.
                        </div>
                        <div className="faq-content">
                            <h3> How do payments between brands and nonprofits work?</h3>
                            Kindred does not process payments between partner brands and nonprofits. Each partner brand has an existing affiliate marketing program that is used to generate referral links and fulfill payments when purchases are made using the referral link.
                        </div>
                        <div className="faq-content">
                            <h1> Nonprofits</h1>
                        </div>
                        <div className="faq-content">
                            <h3>What brands are available to partner with?</h3>
                            For partner privacy, we do not reveal partner brands on our website, however, we will be happy to share more details over a phone call. Feel free to use the 'Contact Us' button above to do so!
                        </div>
                        <div className="faq-content">
                            <h3>How can I trust that brands will share their proceeds?</h3>
                            Payment fulfillment is covered by affiliate marketing programs that codify the legal and financial agreement between affiliate and brand. We’ll review the credibility and contract of partner brand’s affiliate marketing programs to ensure that you are protected.
                        </div>
                        <div className="faq-content">
                            <h3>How do I know that the brand that my organization partners with shares its values?</h3>
                            Kindred makes recommendations on partners based on shared values, labor practices, and giving programs. We invite you to chat with potential partners to vet their standards as well.
                        </div>
                        <div className="faq-content">
                            <h3>Why are brands interested in donating so much of a purchase to a nonprofit?</h3>
                            While our partner brands are interested in making an impact through their donations, they also benefit when you send your supporters to their store. Traditionally, stores spend 20-30% of a purchase on acquiring a customer through advertisements or other means;
                             in this case, that money is compensating your nonprofit for the customer lead.
                        </div>
                        <div className="faq-content">
                            <h3>Ok, I’d like my org to join the beta! What next?</h3>
                            <li>After you join the waitlist, we’ll reach out when we have found potential brand partners that have ‘kindred’ spirit.</li>
                            <li>Kindred will have select brands generate referral links for your nonprofit and set up affiliate commission payments. Kindred will also incorporate the partnership into the newest version of the Kindred app, which means that your supporters will see a customized Kindred experience when they visit participating brands.</li>
                            <li>Your team will reach out to your community to share news about the partnership(s) through email, social media, and through your website (we can with design and content!)</li>
                            <li>Tada! Wait until donations from partner brands hit your organization’s bank account.</li>

                        </div>
                        <div className="faq-content">
                            <h1> Businesses</h1>
                        </div>
                        <div className="faq-content">
                            <h3>What nonprofits are available to partner with?</h3>
                            For partner privacy, we do not reveal partner brands on our website, however, we will be happy to share more details over a phone call. Feel free to use the 'Contact Us' button above to do so!
                        </div>
                        <div className="faq-content">
                            <h3> How do I know that the nonprofit that my company partners with shares its values?</h3>
                            Kindred makes recommendations on partners based on shared values, labor practices, and giving programs. We invite you to chat with potential partners to vet their standards as well.
                        </div>
                        <div className="faq-content">
                            <h3>What nonprofits are available to partner with?</h3>
                            For partner privacy, we do not reveal partner brands on our website, however, we will be happy to share more details over a phone call. Feel free to use the 'Contact Us' button above to do so!
                        </div>
                        <div className="faq-content">
                            <h3>I’d like to join the beta! What next?</h3>
                            <li>After your business joins our waitlist, we’ll reach out when we have found potential brand partners that have ‘kindred’ spirit.</li>
                            <li>Your business will create new affiliate accounts using your existing affiliate marketing program for each of your nonprofit partners.</li>
                            <li>You’ll install the private Kindred app from the Shopify App store. </li>
                            <li>Tada! Nonprofits will start to send you new customers that are super-intent on purchasing. Your existing affiliate marketing program will take care of payments.</li>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FaqContent;