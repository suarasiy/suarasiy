import React from 'react';

import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="music-container">
      <h1>Music Favorites goes Here</h1>
      <div className="button-navigation-container">
        <Link to="/images" draggable={false}>
          <button className="button-navigation">BACK</button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
