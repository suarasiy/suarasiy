import React from 'react';

import ButtonNavigation from '../../components/button-navigation/index';

const Index: React.FC = () => {
  return (
    <div className="music-container">
      <h1>Music Favorites goes Here</h1>
      <div className="buttons-navigation-container">
        <ButtonNavigation
          navigations={[
            {
              url: '/images',
              label: 'Images',
              state: 'previous',
            },
            {
              url: '/profile',
              label: 'Profile',
              state: 'next',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
