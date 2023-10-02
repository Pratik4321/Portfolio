import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import checkmysite from "../../Assets/CheckMySite.PNG";
import portfolioGui from "../../Assets/portfolio3.PNG";
import khaneyTimes from "../../Assets/khaneyTime.PNG";
import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={checkmysite}
              title="CheckMySite"
              description="CheckMySite is a comprehensive and user-friendly online platform designed to help website owners and administrators monitor the status and performance of their websites."
              ghLink="#"
              demoLink="https://www.checkmysite.live/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={portfolioGui}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/Pratik4321/Portfolio"
              demoLink="https://www.giripradip.com.np/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={khaneyTimes}
              title="KhanyTimes"
              description="Khaney time is a simple restaurant app to find places to eat around you that uses React.js + Tailwind and redux-toolkit in the front end"
              ghLink="#"
              demoLink="https://khaney-time.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={khaneyTimes}
              title="Ecommerce"
              description="This is a fully functional eCommerce website that uses React.js + Tailwind and redux-toolkit in the front end and nestjs and typeorm in backend and PostgresSql as Database."
              ghLink="https://github.com/sandeshtamanq/7thsem-project_backend"
              demoLink="https://7th-sem-project-frontend.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
