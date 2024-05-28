"use client";

import "./footer.scss";
import { Col, Row, Container, Button, Navbar, Nav } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
export default function LandingPageFooter() {
  return (
    <Container>
      <Row className="footer1 d-flex justify-content-center">
        <Col md={5}>
          <div className="div1">
            <h1>A Price To Suit Everyone</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus.
            </p>
          </div>
          <div className="div2">
            <h1>$40</h1>
            <p>UI Design Kit</p>
          </div>
          <div className="div3 d-flex justify-content-center">
            <p>See, One price, Simple.</p>
          </div>
          <div className="d-flex justify-content-center">
            <Button className="purchase_now_btn">Purchase Now</Button>
          </div>
        </Col>
      </Row>
      <Row className="footer2">
        <Col>
          <div>
            <p>@Yourcompany</p>
          </div>
        </Col>
        <Col className="d-flex justify-content-end ">
          <Button className="purchase_now_btn">Purchase Now</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Navbar >
            <Navbar.Collapse>
              <Nav>
                <button className="footer-nav-btn">
                  <Nav.Link href="/">Home</Nav.Link>
                </button>

                <button className="footer-nav-btn">
                  <Nav.Link href="/about">About</Nav.Link>
                </button>
                <button className="footer-nav-btn">
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col className="footer-icons d-flex justify-content-end">
          <div>
            <BsFacebook></BsFacebook>
          </div>
          <div>
            <BsLinkedin />
          </div>
          <div>
            <BsTwitter />
          </div>
          <div>
            <BsYoutube />
          </div>
          <div>
            <BsInstagram />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
