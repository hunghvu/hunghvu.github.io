import React, { useState } from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
  CardDeck, CardBody, CardImg, CardSubtitle
} from 'reactstrap';
import './Projects.css'
import ArmageddonImage from '../assets/projects/2-armageddon.webp'

/* Receive props: backgroundColor */
const ProjectsComponent = (props) => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  return (
    <div style={{ backgroundColor: props.backgroundColor, paddingBottom: 500 }} className="container-projects">
      <div className="d-flex justify-content-center" style={{ paddingBottom: 20 }}>
        <div className="animated-underline">
          <h2>Projects</h2>
        </div>
      </div>

      <Nav tabs style={{ backgroundColor: 'white' }} className="justify-content-center">
        <NavItem>
          <NavLink onClick={() => { toggle('1'); }}>JavaScript Games</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => { toggle('2'); }}>Full-stack Web App</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => { toggle('3'); }}>Android App</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => { toggle('4'); }}>Other</NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab} className="d-flex justify-content-center">
        {/* For some reasons, card title and body are white by default */}
        <TabPane tabId="1">
          <CardDeck>
            <Row>
              <Col sm="6">
                <Card inverse>
                  <Card>
                    <CardImg top width="100%" src={ArmageddonImage} alt="Card image cap" />
                    <CardBody>
                      <CardTitle tag="h5" style={{ color: 'black' }}>8-bit-armageddon</CardTitle>
                      <CardText style={{ color: 'black' }}>A 2D turn-based strategy browser game in JavaScript inspired by Worms, with a 8-bit aesthetic.</CardText>
                      <div className="d-flex justify-content-around">
                        <Button>GitHub</Button>
                        <Button>Live site</Button>
                        <Button>Demo</Button>
                      </div>
                    </CardBody>
                  </Card>
                </Card>
              </Col>
            </Row>
          </CardDeck>

        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>

    </div>
  );
}

export default ProjectsComponent;
