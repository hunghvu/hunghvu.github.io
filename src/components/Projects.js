import React, { useState } from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
  CardDeck, CardBody, CardImg, CardSubtitle
} from 'reactstrap';
import classnames from 'classnames';

import './Projects.css'
import ArmageddonGif from '../assets/projects/2-armageddon.gif';
import BulletHellGif from '../assets/projects/3-bullet-hell.gif';
import McSandwichGif from '../assets/projects/4-mc-sandwich.gif';

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

      <div style={{ maxWidth: '50vw', margin: 'auto' }}>
        <Nav pills style={{ backgroundColor: 'white', paddingBottom: 10 }} className="justify-content-center">
          <NavItem>
            <NavLink onClick={() => { toggle('1'); }} className={classnames({ active: activeTab === '1' })}>JavaScript Games</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => { toggle('2'); }} className={classnames({ active: activeTab === '2' })}>Full-stack Web App</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => { toggle('3'); }} className={classnames({ active: activeTab === '3' })}>Android App</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => { toggle('4'); }} className={classnames({ active: activeTab === '4' })}>Other</NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab} className="d-flex justify-content-center">
          {/* For some reasons, card title and body are white by default */}
          <TabPane tabId="1">
            <CardDeck>
              <Card>
                <CardImg top height="210" src={ArmageddonGif} alt="8-bit Armageddon demo GIF" />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: 'black' }}>8-bit-armageddon</CardTitle>
                  <CardSubtitle tag="em">JS | HTML | CSS <br/><br/></CardSubtitle>
                  <CardText style={{ color: 'black', marginTop: 20 }}>A 2D turn-based strategy browser game in JavaScript inspired by Worms, with a 8-bit aesthetic.</CardText>
                  {/* flex seems to make div float so buttons will not be responsive as card body */}
                  <Button href="https://github.com/hunghvu/8-bit-armageddon" style={{ marginRight: 15 }}>GitHub</Button>
                  <Button href="https://hunghvu.github.io/8-bit-armageddon/" style={{ marginRight: 15 }}>Live site</Button>
                  <Button href="https://www.youtube.com/watch?v=vXzTd2H_wnQ">Youtube demo</Button>
                </CardBody>
              </Card>

              <Card>
                <CardImg bottom height="210" src={BulletHellGif} alt="Bullet Hell demo Gif" />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: 'black' }}>Bullet Hell</CardTitle>
                  <CardSubtitle tag="em">JS | HTML | CSS <br/><br/></CardSubtitle>
                  <CardText style={{ color: 'black', marginTop: 20 }}>A browser game of Bullet Hell genre based on Touhou franchise, built on JavaScript.</CardText>
                  <Button href="https://github.com/hunghvu/bullet-hell" style={{ marginRight: 15 }}>GitHub</Button>
                  <Button href="https://hunghvu.github.io/bullet-hell/">Live site</Button>
                </CardBody>
              </Card>
            </CardDeck>

          </TabPane>
          <TabPane tabId="2">
            <CardDeck>
              <Card>
                <CardImg top height="210" src={McSandwichGif} alt="McSandwich demo gif" />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: 'black' }}>McSandwich</CardTitle>
                  <CardSubtitle tag="em">
                    Frontend: JS | HTML | CSS | jQuery <br />
                    Backend: Express.js | Node.js | PostgreSQL
                  </CardSubtitle>
                  <CardText style={{ color: 'black', marginTop: 20 }}>
                    This is a sub sandwich restaurant website which has four main pages: Home, menu, Order and Cart page.
                    The users can sign in and create a new account to order foods. The food options are customizable and orders will be saved to user account.
                  </CardText>
                  {/* flex seems to make div float so buttons will not be responsive as card body */}
                  <Button href="https://github.com/hunghvu/mc-sandwich" style={{ marginRight: 15 }}>GitHub</Button>
                  <Button href="https://hungvu-mcsandwich.herokuapp.com" style={{ marginRight: 15 }}>Live site</Button>
                </CardBody>
              </Card>

            </CardDeck>
          </TabPane>
        </TabContent>
      </div>


    </div>
  );
}

export default ProjectsComponent;
