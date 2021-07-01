import React, { useState } from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, CardDeck
} from 'reactstrap';
import classnames from 'classnames';

import './Projects.css'
import ArmageddonGif from '../assets/projects/2-armageddon.gif';
import BulletHellGif from '../assets/projects/3-bullet-hell.gif';
import McSandwichGif from '../assets/projects/4-mc-sandwich.gif';
import ComChatGif from '../assets/projects/5-com-chat.gif';
import DynamicWallpaperImage from '../assets/projects/6-dynamic-wallpaper.webp';
import TetrisImage from '../assets/projects/7-tetris.webp';
import CardComponent from './Card';

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

      <div style={{ maxWidth: '40vmax', margin: 'auto', backgroundColor: 'white', borderRadius: 25 }}>
        <Nav pills style={{ paddingBottom: 10 }} className="justify-content-center">
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
              <CardComponent
                image={ArmageddonGif}
                alt="8-bit Armageddon demo GIF"
                title="8-bit Armageddon"
                subtitle={"JS | HTML | CSS \n "}
                text="A 2D turn-based strategy browser game in JavaScript inspired by Worms, with a 8-bit aesthetic."
                github="https://github.com/hunghvu/8-bit-armageddon"
                livesite="https://hunghvu.github.io/8-bit-armageddon/"
                video="https://www.youtube.com/watch?v=vXzTd2H_wnQ"
              />

              <CardComponent
                image={BulletHellGif}
                alt="Bullet Hell demo GIF"
                title="Bullet Hell"
                subtitle={"JS | HTML | CSS \n "}
                text={"A browser game of Bullet Hell genre based on Touhou franchise, built on JavaScript. \n "}
                github="https://github.com/hunghvu/bullet-hell"
                livesite="https://hunghvu.github.io/bullet-hell/"
              />
            </CardDeck>
          </TabPane>

          <TabPane tabId="2">
            <CardDeck>
              <CardComponent
                image={McSandwichGif}
                alt="McSandwich demo GIF"
                title="McSandwich"
                subtitle={"Frontend: JS | HTML | CSS | jQuery \nBackend: Express.js | Node.js | PostgreSQL"}
                text="This is a sub sandwich restaurant website which has four main pages: Home, menu, Order and Cart page.
                The users can sign in and create a new account to order foods. The food options are customizable and orders will be saved to user account."
                github="https://github.com/hunghvu/mc-sandwich"
                livesite="https://hungvu-mcsandwich.herokuapp.com"
              />
            </CardDeck>
          </TabPane>

          <TabPane tabId="3">
            <CardDeck>
              <CardComponent
                image={ComChatGif}
                alt="Com Chat demo GIF"
                title="Com Chat"
                subtitle={"Frontend: Java | XML. \nBackend: Express.js | Node.js | PostgreSQL"}
                text={"An Android chatting application, with features like Group and Direct Messaging, Weather Forecasting, Google Map and Friends Connection. \n "}
                github="https://github.com/hunghvu/com-chat"
                video="https://youtu.be/5n2kLIX5d_M"
              />
            </CardDeck>
          </TabPane>

          <TabPane tabId="4">
            <CardDeck>
              <CardComponent
                image={DynamicWallpaperImage}
                alt="Dynamic Wallpaper demo image"
                title="Dynamic Wallpaper"
                subtitle={"Java \n "}
                text="A program allows users to automatically change wallpaper based on user's provided time throughout a day."
                github="https://github.com/hunghvu/dynamic-wallpaper"

              />

              <CardComponent
                image={TetrisImage}
                alt="Tetris demo image"
                title="Tetris"
                subtitle={"Java \n "}
                text="Designed and built a front end for Tetris game. The goal is to construct a GUI with a given backend codebase."
                github="https://github.com/hunghvu/TCSS305/tree/master/hungvu-tetris"

              />
            </CardDeck>
          </TabPane>
        </TabContent>
      </div>


    </div>
  );
}

export default ProjectsComponent;
