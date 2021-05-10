import React, { useState } from 'react';
import { NavigationProps } from './interface/interface';

import { Link } from 'react-router-dom';

import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';

const Index: React.FC<NavigationProps> = ({ ...NavigationProps }) => {
  const [navigation] = useState(NavigationProps.navigations);

  return (
    <div className="buttons-navigation-container">
      {navigation.map((navigation, index) =>
        navigation.state === 'previous' ? (
          <Link key={index} to={navigation.url} draggable={false}>
            <button className="button-navigation--to-left">
              <HiArrowCircleLeft
                size={18}
                style={{ verticalAlign: 'middle' }}
              />{' '}
              <span>{navigation.label}</span>
            </button>
          </Link>
        ) : (
          <Link key={index} to={navigation.url} draggable={false}>
            <button className="button-navigation--to-right">
              <span>{navigation.label}</span>{' '}
              <HiArrowCircleRight
                size={18}
                style={{ verticalAlign: 'middle' }}
              />
            </button>
          </Link>
        )
      )}
    </div>
  );
};

export default Index;
