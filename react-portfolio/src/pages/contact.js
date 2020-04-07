import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
  return (
    <div className="contactPage">
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Justin Kellogg</h1>
            <h2>JLKellogg18@outlook.com</h2>
            <Row>
              <a href="https://github.com/justinkellogg89">Github</a>
            </Row>
            <Row>
              <a href="https://www.linkedin.com/in/justin-kellogg-7a8546129/">
                Linkedin
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
