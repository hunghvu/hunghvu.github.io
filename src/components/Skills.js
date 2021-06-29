import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Utils.css';
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
    <div className="container-skills">
      <div className="d-flex justify-content-center" style={{paddingBottom: 20}}>
        <div className="animated-underline">
          <h2>Skills</h2>
        </div>
      </div>

      <Container>
        <Row style={{paddingLeft: 105}}>
          <Col xl="3" md="6" xs="12">
            <Row className="mb-3"><h4>Languages</h4></Row>
            <Row className="mb-3"><img src={JavaScriptLogo} alt="JavaScript Logo" className="icons" /></Row>
            <Row className="mb-3"><img src={HtmlLogo} alt="HTML5 Logo" className="icons" /></Row>
            <Row className="mb-3"><img src={CssLogo} alt="CSS3 Logo" className="icons" /></Row>
            <Row className="mb-3"><img src={JavaLogo} alt="Java Logo" className="icons" /></Row>
            <Row className="mb-3"><img src={PostgreSqlLogo} alt="PostgreSQL Logo" className="icons" /></Row>
          </Col>

          <Col xl="3" md="6" xs="12">
            <Row className="mb-3"><h4>Libraries</h4></Row>
            <Row className="mb-3"><img src={ReactLogo} alt="React and React Native Logo" className="icons" /></Row>
            <Row className="mb-3"><img src={BootstrapLogo} alt="Bootstrap Logo" className="icons" /></Row>
            <Row className="mb-3" style={{ paddingTop: 25 }}><img src={JqueryLogo} alt="JQuery Logo" className="icons" style={{ width: 96 }} /></Row>
          </Col>

          <Col xl="3" md="6" xs="12">
            <Row className="mb-3"><h4>OS</h4></Row>
            <Row className="mb-3"><img src={WindowsLogo} alt="WindowsLogo" className="icons" /></Row>
            <Row className="mb-3"><img src={LinuxLogo} alt="Linux Logo" className="icons" /></Row>
            <Row className="mb-3"><img src={AndroidLogo} alt="Android Logo" className="icons" /></Row>
          </Col>

          <Col xl="3" md="6" xs="12">
            <Row className="mb-3"><h4>Other</h4></Row>
            <Row className="mb-3"><img src={GitLogo} alt="Git version control system Logo" className="icons" style={{ width: 96 }} /></Row>
            <Row className="mb-3"><img src={PostmanLogo} alt="Postman Logo" className="icons" style={{ width: 128 }} /></Row>
          </Col>
        </Row>


        <Row className="mb-3">
          <Col className="text-center"><h5>With some experience in</h5></Col>
        </Row>

        <Row className="mb-3" style={{paddingLeft: 105}}>
          <Col xl="3" md="6" xs="12"><img src={PythonLogo} alt="Python Logo" className="icons" /></Col>
          <Col ><img src={NodeJsLogo} alt="NodeJS Logo" className="icons" style={{ width: 96, paddingTop: 10 }} /></Col>
        </Row>

        <Row className="mb-3" style={{paddingLeft: 105}}>
          <Col xl="3" md="6" xs="12"><img src={CLogo} alt="C Logo" className="icons" /></Col>
          <Col ><img src={ExpressLogo} alt="Express Logo" className="icons" style={{ width: 96, paddingTop: 15 }} /></Col>
        </Row>

        <Row style={{paddingLeft: 105}}>
          <Col xl="3" md="6" xs="12" ></Col>
          <Col style={{paddingBottom: 20}}><img src={IonicLogo} alt="Ionic Logo" className="icons" style={{ width: 96, paddingTop: 5 }} /></Col>
        </Row>
      </Container>

    </div>
  );
}

export default SkillsComponent;
