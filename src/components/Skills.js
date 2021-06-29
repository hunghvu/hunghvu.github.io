import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Skills.css';

import JavaScriptLogo from '../assets/skills/languages/1-js-logo.svg';
import HtmlLogo from '../assets/skills/languages/2-html-logo.svg';
import CssLogo from '../assets/skills/languages/3-css-logo.svg';
import JavaLogo from '../assets/skills/languages/4-java-logo.svg';
import PythonLogo from '../assets/skills/languages/5-python-logo.svg';
import CLogo from '../assets/skills/languages/6-c-logo.svg';
import PostgreSqlLogo from '../assets/skills/languages/7-postgresql-logo.svg';

import ReactLogo from '../assets/skills/frameworks/1-react-logo.svg';
import NodeJsLogo from '../assets/skills/frameworks/2-nodejs-logo.svg';
import IonicLogo from '../assets/skills/frameworks/3-ionic-logo.svg';
import JqueryLogo from '../assets/skills/frameworks/4-jquery-logo.svg';
import BootstrapLogo from '../assets/skills/frameworks/5-bootstrap-logo.svg';
import ExpressLogo from '../assets/skills/frameworks/6-express-logo.svg';

import WindowsLogo from '../assets/skills/os/1-windows-logo.svg';
import LinuxLogo from '../assets/skills/os/2-linux-logo.svg';
import AndroidLogo from '../assets/skills/os/3-android-logo.svg';

import GitLogo from '../assets/skills/other/1-git-logo.svg';
import PostmanLogo from '../assets/skills/other/2-postman-logo.svg';

const SkillsComponent = () => {

  return (
    <div style={{ backgroundColor: "#f5f5f5", paddingTop: 80 }}>
      <div className="d-flex justify-content-center">
        <div className="animated-underline">
          <h2>Skills</h2>
        </div>
      </div>
      <Container>

        <Row>
          <Col>
            <h4>Languages</h4>
          </Col>
          <Col>
            <h4>Framework/Libraries</h4>
          </Col>
          <Col>
            <h4>Operating Systems</h4>
          </Col>
          <Col>
            <h4>Other Technologies</h4>
          </Col>
        </Row>

        <Row>
          <Col>
            <img src={JavaScriptLogo} alt="JavaScript Logo" />
          </Col>
          <Col>
            <img src={ReactLogo} alt="React and React Native Logo" />
          </Col>
          <Col>
            <img src={WindowsLogo} alt="WindowsLogo" />
          </Col>
          <Col>
            <img src={GitLogo} alt="Git version control system Logo" />
          </Col>
        </Row>

        <Row>
          <Col>
            <img src={HtmlLogo} alt="HTML5 Logo" />
          </Col>
          <Col>
            <img src={BootstrapLogo} alt="Bootstrap Logo" />
          </Col>
          <Col>
            <img src={LinuxLogo} alt="Linux Logo" />
          </Col>
          <Col>
            <img src={PostmanLogo} alt="Postman Logo" />
          </Col>
        </Row>

        <Row>
          <Col>
            <img src={CssLogo} alt="CSS3 Logo" />
          </Col>
          <Col>
            <img src={JqueryLogo} alt="JQuery Logo" />
          </Col>
          <Col>
            <img src={AndroidLogo} alt="Android Logo" />
          </Col>
          <Col xs="3"></Col>
        </Row>

        <Row>
          <Col>
            <img src={JavaLogo} alt="Java Logo" />
          </Col>
        </Row>

        <Row>
          <Col>
            <img src={PostgreSqlLogo} alt="PostgreSQL Logo" />
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <em>With some experience in</em>
          </Col>
        </Row>

        <Row>
          <Col xs="3">
            <img src={PythonLogo} alt="Python Logo" />
          </Col>
          <Col>
            <img src={NodeJsLogo} alt="NodeJS Logo" />
          </Col>
        </Row>

        <Row>
          <Col xs="3">
            <img src={CLogo} alt="C Logo" />
          </Col>
          <Col>
            <img src={ExpressLogo} alt="Express Logo" />
          </Col>
        </Row>

        <Row>
          <Col xs="3"></Col>
          <Col>
            <img src={IonicLogo} alt="Ionic Logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SkillsComponent;
