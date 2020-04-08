import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./about.css";
import image from "../imgs/profilepic.png";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Justin Kellogg - About Me</h1>
          </Col>
        </Row>
        <Row className="bio">
          <Col size="md-12">
            <Row className="image">
              <img src={image} alt="profile picture" />
            </Row>
            <h1>Introduction</h1>
            <p>
              My name is Justin Kellogg. I'm a 31 year old husband and father.
              My wife and I have been married for 6 years, but we have been
              together since high school. My three sons are my life and even
              though ages 5, 3, and 2 months are not easy to deal with, they're
              my adventure.
            </p>
            <h1>Currently:</h1>
            <p>
              I'm currently employed with the Los Angeles County Sheriff's
              Department as a Supervising Line Deputy but I have an eye on a web
              development career path. My current work includes mostly project
              management style work but I do have daily reports that I generate
              with Excel that go to all corners of the department. My work has
              given me the skills to be an effective leader, manage stress to
              optimize efficiency, and handle extremely high stress situations
              while making split second decisions with lives on the line.
            </p>
            <h1>My brief history:</h1>
            <p>
              I have had a passion for technology since I was very young. My
              earliest childhood memory was playing a Mickey Mouse game that
              needed to be launched through the command line on Windows 95. That
              tiny CRT monitor was an instant passion and I wanted to know
              everything about it. I built my first computer when I was about 13
              years old and I've never looked back. Since then I've built
              multiple PC's for family and friends, spent months accumulatively
              troubleshooting hardware and software issues on Windows, Mac, and
              Linux although at this point it's probably getting close to the
              years in time spent. Along my journey I decided to return to
              school in 2017, and I am scheduled to graduate at the end of 2020
              with a bachelor's degree in computer information systems.
              Additionally I am scheduled to graduate from the University of
              Arizona Web Development Boot Camp on April 20th, 2020.
            </p>
            <h1>My future:</h1>
            <p>
              From this point forward, I am a web developer. My life journey has
              been chaotic and atypical, but all of the skills that I currently
              possess I believe will lead me to the place I want to be as a
              developer. I am a lifelong learner, motivated worker with little
              to not instruction, and do my best to bring the best out in
              everyone I come into contact with. I want to make life easier for
              everyone I meet, and web development is a way for me to achieve
              that goal while being able to support my family and tell my kids
              that their dad is doing something that he can be proud of and
              hopefully inspire them to do the same.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
