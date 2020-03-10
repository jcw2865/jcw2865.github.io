import React from "react";
import "./style.css"
// import { Col, Row, Container } from "../components/Grid"
import { Container } from "../components/Grid"
import AboutCard from "../components/AboutCard";

function About() {
  return (
    <div>
      <Container fluid>
        <AboutCard backgroundImage="">
        </AboutCard>
      </Container>
    </div >
  );
}

export default About;
