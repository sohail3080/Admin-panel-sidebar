"use client";
import { Button, Col, Row, Container, Image } from "react-bootstrap";
import { default as NextImage } from "next/image";
import "./landingpage.scss";
import LadingPageHeader from "./header";
import LandingPageFooter from "./footer";
import AdminPanel from "@/Components/adminpanel/adminpanel";
import adminstyle from "../../adminpanel.module.scss"
export default function LandingPage() {
  return (
   
    <div className={adminstyle["container"]}>
    <AdminPanel/>
    <div className={adminstyle["content"]}>
      <Container>
      <LadingPageHeader />
        <Row className="landing_row1">
          {/* className="d-flex justify-content-end" 
          If we want to alight the below texts to the end 
          we can use the above in the Row tag
          */}
          <div className="landing_img1">
            <NextImage
              src="/assets/Image/designer_1.png"
              width={800}
              height={800}
              alt=""
            />
          </div>
          <Col className="landing_text" md={5}>
            <div>
              <h1>Introduce Your Product Quickly & Effectively</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <Button className="purchase_ui_kit">Purchase UI Kit</Button>
              <Button className="learn_more">Learn More</Button>
            </div>
          </Col>
        </Row>
        <Row className="landing_row2">
          <Row>
            <Col className="landing_text2" md={5}>
              <div>
                <h1>Light, Fast & Powerful</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="landing_text3" md={5}>
            <Col>
              <h5>Title Goes Here</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </Col>
            <Col>
              <h5>Title Goes Here</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </Col>
          </Row>
        </Row>

        <Row className="landing_row3 d-flex justify-content-end vh-50">
          <Col className="landing_img3">
            <div>
              <NextImage
                width={300}
                height={250}
                src="/assets/Image/img3.png"
              ></NextImage>
            </div>
          </Col>
          <Col className="landing_text4" md={5}>
            <div>
              <h1>Light, Fast & Powerful</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="landing-row4 d-flex justify-content-end">
          <Col className="landing_img4">
            <div>
              <Image src="/assets/Image/img4.png" fluid></Image>
            </div>
          </Col>
          <Col className="landing_text5" md={5}>
            <div>
              <h1>Light, Fast & Powerful</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="landing-row5 d-flex justify-content-end">
          <Col className="landing_img5">
            <div>
              <Image src="/assets/Image/img5.png" fluid></Image>
            </div>
          </Col>
          <Col className="landing_text6" md={5}>
            <div>
              <h1>Light, Fast & Powerful</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <Button className="purchase_now_btn">Purchase Now</Button>
            </div>
          </Col>
        </Row>
        <LandingPageFooter />
      </Container>
      </div>
      </div>
  );
}
