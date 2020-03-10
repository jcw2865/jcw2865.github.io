import React, { Component } from "react";
import "./style.css"
// import { Col, Row, Container } from "../components/Grid"
import { Container } from "../components/Grid"
import PortfolioCard from "../components/PortfolioCard";
import projects from "../projects.json";


class Portfolio extends Component {

    state = {
        projects
    }
    render() {
        // console.log(this.state.projects[0].imgSrc)
        return (
            <Container fluid>
                {/* Uncomment the line below if mapping */}
                {/* {this.state.projects.map(project => ( */}
                <PortfolioCard
                // Uncomment the lines below if mapping.
                // id={project.id}
                // imgSrc={project.imgSrc}
                // name={project.name}
                // userStoryAs={project.userStoryAs}
                // userStoryIWant={project.userStoryIWant}
                // userStorySoThat={project.userStorySoThat}
                // techsUsed={project.techsUsed}
                // siteLink={project.siteLink}
                // ghLink={project.ghLink}
                />
                {/* Uncomment the line below if mapping */}
                {/* ))} */}

            </Container >

        );
    }
}

export default Portfolio;
