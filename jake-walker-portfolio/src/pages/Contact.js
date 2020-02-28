import React from "react";
import "./style.css"
import { Col, Row, Container } from "../components/Grid"
import ContactCard from "../components/ContactCard";


function Contact() {
    return (
        <Container fluid>
            <ContactCard>
            </ContactCard>
        </Container>

    );
}

export default Contact;
