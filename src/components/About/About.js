import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


import Aboutcard from "./AboutCard";
import swimming from "../../Assets/swimming.JPG";
import sneorgie from "../../Assets/sneorge.jpg";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who I Am
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={swimming} alt="Swimming off a waterfall" className="img-fluid" />
            <br/>
            <br/>
            <br/>
            <img src={sneorgie} alt="George the snake having a bath" className="img-fluid" />
          </Col>
        </Row>
        

      </Container>
    </Container>
  );
}

export default About;
