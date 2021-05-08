import React from 'react';

import ButtonNavigation from '../../components/button-navigation/index';

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
      <div className="buttons-navigation-container">
        <ButtonNavigation
          navigations={[
            {
              url: '/profile',
              label: 'Profile',
              state: 'previous',
            },
            {
              url: '/music',
              label: 'Music',
              state: 'next',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
