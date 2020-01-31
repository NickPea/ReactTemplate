import React from "react";
import { Container, Row, Col, Jumbotron, Carousel } from "react-bootstrap";
import style from "./showbootstrap.module.css";

function ShowBootstrap() {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Jumbotron>
            <div className={style.wedTitle}>
              <br />
              <h1>Nick & Tomo's</h1>
              <h2>Wedding</h2>
            </div>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={style.carouselWrapper}>
            <Carousel>
              <Carousel.Item>
                <img src="src/assets/rusticwood.jpg" alt="some wood" />
                <Carousel.Caption>
                  <h1>hey ya</h1>
                  <h2>getting married yall!</h2>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default ShowBootstrap;
