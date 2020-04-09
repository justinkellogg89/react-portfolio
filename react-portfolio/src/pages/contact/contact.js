import React from "react";
import Col from "../../components/Col/index";
import Row from "../../components/Row/index";
import Container from "../../components/Container/index";
import "./contact.css";

function Contact() {
  return (
    <div className="contactPage">
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Contact Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Justin Kellogg</h1>
            <h2>JLKellogg18@outlook.com</h2>
            <a
              class="btn btn-dark btn-lg"
              href="https://github.com/justinkellogg89"
              role="button"
            >
              Github
            </a>
            <a
              class="btn btn-primary btn-lg"
              href="https://www.linkedin.com/in/justin-kellogg-7a8546129/"
              role="button"
            >
              Linkedin
            </a>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <a
              className="resume"
              href="https://1drv.ms/w/s!AkfdEh79vXAk3lJ76cShUSicmDRM?e=2gDm9c"
            >
              My Résumé
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
