import React from 'react';
import EmailImage from '../assets/about/2-email.svg';
import GitHubImage from '../assets/about/3-github.svg';
import LinkedInImage from '../assets/about/4-linkedin.svg';

const FooterComponent = () => {
  return (

    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center" style={{ paddingBottom: 20 }}>
        <a href="https://www.linkedin.com/in/hunghvu/">
          <img src={LinkedInImage} className="icons" alt="LinkedIn icon" />
        </a>
        <a href="https://github.com/hunghvu">
          <img src={GitHubImage} className="icons" alt="GitHub icon" />
        </a>
        <a href="mailto:hunghvu2017@gmail.com">
          <img src={EmailImage} className="icons" alt="Gmail icon" />
        </a>
      </div>
      <p className="d-flex justify-content-center" style={{ fontSize: 12 }}>The icons used in this page belong to their respective owners and/or organizations.</p>
      <p className="d-flex justify-content-center" style={{ fontSize: 12 }}>This page is only for personal and non-comercial use.</p>
      <p className="d-flex justify-content-center" style={{ fontSize: 24 }}>&#169; 2021 Hung Huu Vu.</p>
    </div >


  )
}

export default FooterComponent;