import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import utensilevr from "../../Assets/vrproject.gif";
import buddyup from "../../Assets/buddyup.JPG";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={utensilevr}
              isBlog={false}
              title="Utensile VR"
              description="A VR app for Meta Quest headsets that allows users to import, view, and interact with 3D CAD models."
              demoLink="https://www.oculus.com/experiences/9603097363095403/release-channels/1684108105344912/?token=rxt2JX5s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buddyup}
              isBlog={false}
              title="Buddy Up"
              description="A housing finder app for students of UC Santa Barbara. Users can post their housing needs and connect with others in order to secure housing amidst UCSB's housing crisis."
              ghLink="https://github.com/ucsb-cs148-w23/project-t08-buddyup"
              demoLink="https://t08-buddy-up.web.app/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />


        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />

        <b className="home-about-description">
          Thanks to <a className="purple" href="https://github.com/soumyajit4419/Portfolio">soumyajit4419</a> for building the template for this portfolio.
        </b>
      </Container>
    </Container>
  );
}

export default Projects;
