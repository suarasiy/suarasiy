// core
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// interface
import { NavbarProps } from './interface/interface';

// stylesheet
import '../../scss/index.scss';

const Navbar: React.FC<NavbarProps> = ({ ...NavbarProps }): JSX.Element => {
  const [url] = useState(NavbarProps.route);
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="sectors">
        {url.map((route, index) => (
          <Link
            key={index}
            to={route.url}
            draggable={false}
            className={
              route.url === location.pathname
                ? 'navbar--link-on'
                : 'navbar--link-off'
            }
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
