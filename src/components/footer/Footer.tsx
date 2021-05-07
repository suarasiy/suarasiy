import React from 'react';

// import react-icons
import { ImInstagram, ImFacebook, ImTwitter, ImGithub } from 'react-icons/im';

import '../../scss/index.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="divide-row">
        <span className="author">Suara SIY</span>
      </div>
      <div className="divide-row">
        <span className="icon">
          <ImGithub size={25} />
        </span>
      </div>
      <div className="divide-row">
        <span className="icon">
          <ImInstagram size={25} />
        </span>
        <span className="icon">
          <ImFacebook size={25} />
        </span>
        <span className="icon">
          <ImTwitter size={25} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
