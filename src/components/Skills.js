import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Utils.css';

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
          <Col xl="3" lg="6">
            <h4>Languages</h4>
          </Col>
          <Col xl="3" lg="6">
            <h4>Frameworks/Libraries</h4>
          </Col>
          <Col xl="3" lg="6">
            <h4>Operating Systems</h4>
          </Col>
          <Col xl="3" lg="6">
            <h4>Other</h4>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <img src={JavaScriptLogo} alt="JavaScript Logo" className="icons"/>
          </Col>
          <Col>
            <img src={ReactLogo} alt="React and React Native Logo" className="icons"/>
          </Col>
          <Col>
            <img src={WindowsLogo} alt="WindowsLogo" className="icons"/>
          </Col>
          <Col>
            <img src={GitLogo} alt="Git version control system Logo" className="icons" style={{width: 96}}/>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <img src={HtmlLogo} alt="HTML5 Logo" className="icons"/>
          </Col>
          <Col>
            <img src={BootstrapLogo} alt="Bootstrap Logo" className="icons"/>
          </Col>
          <Col>
            <img src={LinuxLogo} alt="Linux Logo" className="icons"/>
          </Col>
          <Col>
            <img src={PostmanLogo} alt="Postman Logo" className="icons" style={{width: 128}}/>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <img src={CssLogo} alt="CSS3 Logo" className="icons"/>
          </Col>
          <Col>
            <img src={JqueryLogo} alt="JQuery Logo" className="icons" style={{width: 96}}/>
          </Col>
          <Col>
            <img src={AndroidLogo} alt="Android Logo" className="icons"/>
          </Col>
          <Col xs="3"></Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <img src={JavaLogo} alt="Java Logo" className="icons"/>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <img src={PostgreSqlLogo} alt="PostgreSQL Logo" className="icons"/>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="text-center">
            <h5>With some experience in</h5>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs="3">
            <img src={PythonLogo} alt="Python Logo" className="icons"/>
          </Col>
          <Col>
            <img src={NodeJsLogo} alt="NodeJS Logo" className="icons" style={{width: 96}}/>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs="3">
            <img src={CLogo} alt="C Logo" className="icons"/>
          </Col>
          <Col>
            <img src={ExpressLogo} alt="Express Logo" className="icons" style={{width: 96}}/>
          </Col>
        </Row>

        <Row>
          <Col xs="3"></Col>
          <Col>
            <img src={IonicLogo} alt="Ionic Logo" className="icons" style={{width: 96}}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SkillsComponent;
