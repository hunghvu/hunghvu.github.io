import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About.css';
import AboutImage from '../assets/about/1-illustration.svg';
import EmailImage from '../assets/about/2-email.svg';
import GitHubImage from '../assets/about/3-github.svg';
import LinkedInImage from '../assets/about/4-linkedin.svg';


const AboutComponent = () => {

  return (
    <div className="d-flex justify-content-around flex-wrap">
      <div style={{ marginLeft: 20, marginTop: 40, display: 'inline-flex' }} className="flex-column">
        <div className="element"><h1>Hi, I'm Hung Vu</h1></div>
        {/* Description */}
        <p className="content">I'm an aspiring software engineer with interest in both mobile and web platforms.
          I love using web technologies to deliver solutions to real-world problem! That's why I always try
          to learn more about frontend and cross-platfrom (Web, Android) development at the same time.</p>
        {/* Contacts */}

        <div>
          <a href="https://www.linkedin.com/in/hunghvu/">
            <img src={LinkedInImage} className="contacts-icons" />
          </a>
          <a href="https://github.com/hunghvu">
            <img src={GitHubImage} className="contacts-icons" />
          </a>
          <a href="mailto:hunghvu2017@gmail.com">
            <img src={EmailImage} className="contacts-icons" />
          </a>
        </div>
        {/* Education */}
        <h3 style={{ marginTop: 60}}>Education</h3>
        {/* Container default margin is 15 (?) */}
        <Container style={{marginLeft: -15}}>
          <Row>
            <Col>
              <em><b style={{ lineHeight: 4 }}>University of Washington Tacoma</b></em>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>BS, Computer Science and Systems</p>
            </Col>
            <Col>
              <p>06/2021</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Magna Cum Laude, Dean’s List</p>
            </Col>
            <Col>
              <p>GPA: 3.92</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <em><b style={{ lineHeight: 4 }}>South Seattle College</b></em>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>AS, Computer Science</p>
            </Col>
            <Col>
              <p>06/2019</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>President’s List</p>
            </Col>
            <Col>
              <p>GPA: 3.82</p>
            </Col>
          </Row>
        </Container>
      </div>
      <img src={AboutImage} className="illustration" />
    </div>
  );
}

export default AboutComponent;