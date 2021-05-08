import React from 'react';

import { Link } from 'react-router-dom';

import Avatar from '../../assets/images/img.jpg';

const Index: React.FC = () => {
  return (
    <div className="images-container">
      <div className="gallery">
        <div className="divide-gallery-3">
          <div className="ximg">
            <img src={Avatar} alt="saber" />
          </div>
          <div className="ximg">
            <img src={Avatar} alt="saber" />
          </div>
        </div>
        <div className="divide-gallery-2">
          <div className="ximg">
            <img src={Avatar} alt="saber" />
          </div>
          <div className="ximg">
            <img src={Avatar} alt="saber" />
          </div>
        </div>
        <div className="divide-gallery-1">
          <div className="ximg">
            <img src={Avatar} alt="saber" />
          </div>
          <div className="ximg">
            <img src={Avatar} alt="saber" />
          </div>
          <div className="ximg">
            <img src={Avatar} alt="saber" />
          </div>
          <div className="ximg">
            <img src={Avatar} alt="saber" />
          </div>
        </div>
      </div>
      <div className="button-navigation-container">
        <Link to="/profile">
          <button className="button-navigation">BACK</button>
        </Link>
        <Link to="/music">
          <button className="button-navigation">NEXT</button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
