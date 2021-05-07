import React from 'react';

import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="images-container log">
      <div className="gallery log">
        <p>Hello</p>
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
