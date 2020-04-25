import React from "react";
import Col from "../../components/Col/index";
import Row from "../../components/Row/index";
import Container from "../../components/Container/index";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import codeImage from "./images/code.jpeg";
import quizImage from "./images/codingquiz.jpeg";
import generatorImage from "./images/passwordgen.jpeg";
import wdsImage from "./images/workdayschedule.jpeg";
import projectOneImage from "./images/projectone.png";
import projectTwoImage from "./images/projecttwo.png";
import "./portfolio.css";

function Portfolio() {
  return (
    <div className="portfolioPage">
      <Container style={{ marginTop: 30 }}></Container>
      <Row>
        <Col size="md-12">
          <h1>Portfolio</h1>
        </Col>
      </Row>

      <Row>
        <Col size="md-6" className="projectCard">
          <Card className="cardSize" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projectOneImage} />
            <Card.Body>
              <Card.Title>Find Tune</Card.Title>
              <Card.Text>
                Music Searching application that utilizes deezer and giphy API.
                Returns 10 songs and a random GIF related to search term.
              </Card.Text>
              <Button
                href="https://github.com/justinkellogg89/find-tune"
                variant="primary"
              >
                Github Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col size="md-6" className="projectCard">
          <Card className="cardSize" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projectTwoImage} />
            <Card.Body>
              <Card.Title>Wild Kards</Card.Title>
              <Card.Text>
                Application that stores user's favorite quotes from the nation's
                most intriguing family; the Kardashians.
              </Card.Text>
              <Button
                href="https://github.com/justinkellogg89/project2"
                variant="primary"
              >
                Github Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col size="md-6" className="projectCard">
          <Card className="cardSize" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={codeImage} />
            <Card.Body>
              <Card.Title>Code Refactor</Card.Title>
              <Card.Text>
                Refactored HTML code to include semantic HTML and additional alt
                tags.
              </Card.Text>
              <Button
                href="https://github.com/justinkellogg89/code-refactor"
                variant="primary"
              >
                Github Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col size="md-6" className="projectCard">
          <Card className="cardSize" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={quizImage} />
            <Card.Body>
              <Card.Title>Coding Quiz</Card.Title>
              <Card.Text>
                Coding quiz with basic javascript questions.
              </Card.Text>
              <Button
                href="https://github.com/justinkellogg89/coding-quiz"
                variant="primary"
              >
                Github Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col size="md-6" className="projectCard">
          <Card className="cardSize" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={generatorImage} />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Text>
                Password generator that allows the user to select upper/lower
                case, numbers, and special characters for a password between
                8-128 characters.
              </Card.Text>
              <Button
                href="https://github.com/justinkellogg89/Password-Generator"
                variant="primary"
              >
                Github Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col size="md-6" className="projectCard">
          <Card className="cardSize" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={wdsImage} />
            <Card.Body>
              <Card.Title>Workday Scheduler</Card.Title>
              <Card.Text>
                Workday Scheduler allows users to input any appointments,
                meetings or other events. Highlights active timeslot and color
                codes future and past time slots.
              </Card.Text>
              <Button
                href="https://github.com/justinkellogg89/work-day-scheduler"
                variant="primary"
              >
                Github Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
