import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import megraduating from "../../Assets/megraduating.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Here's a brief overview of me.
            </h1>
            <p className="home-about-body">
              I'm a computer science graduate, and I love building things and learning new technologies.
              <br />
              <br />
              I'm looking for a great company where I can work on interesting problems and start my career.
              <br />
              <br/>
              As a VR developer intern, I built an app for product designers to view and show off their designs.
              <br />
              I was the only software developer at Utensile, so I learned a lot about building apps from a non-technical spec.
              <br />
              <br/>
              I've worked with a lot of different technologies. &nbsp;
              <i>
                I built the VR app using <b className="purple">Unity</b> and <b className="purple">C#</b> scripting. 
                I made this website, and others, with <b className="purple">ReactJS</b>. 
                I've worked with <b className="purple">C++</b> in countless data structures and algorithms courses. 
                I regularly use <b className="purple">Python</b> for machine learning, as well as other random scripting tasks.
                I've worked with <b className="purple">Arduino</b> microprocessors. 
                I organize things with <b className="purple">spreadsheets</b>, 
                and I've got a good foundation in <b className="purple">SQL</b> from a databases class.
              </i>

              <br />
              <br />
              I've taken courses in many CS fields, and I haven't found anything I don't like. Here's some of my favorites:
              <i>
                <b className="purple">
                  {" "}
                  Deep Learning, Cryptography, Computer Vision, Data Structures and Algorithms, Database Management Systems
                </b>
              </i>
              <br/>
              <br/>
              I'm very excited to start my career. Shoot me an email at <a className="purple-underline" href='mailto:kaihilbourne@gmail.com'>kaihilbourne@gmail.com</a> if you'd like to connect!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={megraduating} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Find me on:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kaihilbourne"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kaihilbourne111/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
