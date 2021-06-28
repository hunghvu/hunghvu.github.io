import React from 'react';
import './About.css';
import AboutImage from '../assets/1-about.svg';

const AboutComponent = () => {

  return (
    <div style={{display: 'inline-flex'}} className="justify-content-around">
      <div style={{ margin: 20, display: 'inline-flex' }} className="flex-column">
        <h2>About me</h2>
        <p className="content">Hi, I'm Hung Vu, an aspiring software engineer with interest in both mobile and web platforms.
          I love using web technologies to deliver solutions to real-world problem! That's why I always try
          to learn more about frontend and cross-platfrom (Web, Android) development at the same time.
          <br></br>
          Technology is also my hobby. Hence, I keep myself up to date with the news in this field, and play with new things be it
          mobile (Android, iOS), web (frameworks), PC hardware or networking (hardware, open-source firewall, NAS system).</p>
      </div>
      <img src={AboutImage} />
    </div>
  );
}

export default AboutComponent;