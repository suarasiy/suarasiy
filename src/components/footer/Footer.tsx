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
        <a
          href="https://www.github.com/suarasiy"
          draggable={false}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <ImGithub size={25} />
          </span>
        </a>
      </div>
      <div className="divide-row">
        <a
          href="https://www.instagram.com/msdn_network"
          draggable={false}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <ImInstagram size={25} />
          </span>
        </a>
        <a
          href="https://www.facebook.com/msdn.network"
          draggable={false}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <ImFacebook size={25} />
          </span>
        </a>
        <a
          href="https://www.twitter.com/suara_siy"
          draggable={false}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <ImTwitter size={25} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
