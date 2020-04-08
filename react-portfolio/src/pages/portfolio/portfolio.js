import React from "react";
import Col from "../../components/Col/index";
import Row from "../../components/Row/index";
import Container from "../../components/Container/index";
import "./portfolio.css";

function Portfolio() {
  return (
    <div className="portfolioPage">
      <Container style={{ marginTop: 30 }}></Container>
      <Row>
        <Col size="md-12">
          <h1>Portfolio Coming Soon!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <h3>For now, please check out my Github!</h3>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <a
            class="btn btn-dark btn-lg"
            href="https://github.com/justinkellogg89"
            role="button"
          >
            Github
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
