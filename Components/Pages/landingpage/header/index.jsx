"use client";
import style from "./index.module.scss";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

export default function LadingPageHeader() {
  return (
    <Container>
      <Navbar size="lg">
        <Nav className={style["nav"]}>
          <Row className={style["nav-row"]}>
            <Col className={style["nav-col1"]} md={6} xs={12}>
              <button as={Col} className={style["nav-btn"]}>
                <Nav.Link href="/">Home</Nav.Link>
              </button>
              <button as={Col} className={style["nav-btn"]}>
                <Nav.Link href="/about">About</Nav.Link>
              </button>
              <button as={Col} className={style["nav-btn"]}>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </button>
            </Col>
           
            <Col className={style["nav-col2"]} md={6} xs={12}>
              <button as={Col} className={style["buy-nav-btn"]}>
                <Nav.Link href="/buy">Buy Now</Nav.Link>
              </button>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </Container>
  );
}
