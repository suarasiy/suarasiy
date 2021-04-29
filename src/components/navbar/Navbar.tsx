// core
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// interface
import { NavbarProps } from './interface/interface';

// stylesheet
import '../../scss/index.scss';

const Navbar: React.FC<NavbarProps> = ({ ...NavbarProps }): JSX.Element => {
  const [url, setUrl] = useState(NavbarProps.route);

  const urlHandler = (index: number): any => {
    const urls = url;
    const newurl = urls[index];
    urls.map((e) => {
      return (e.active = false);
    });
    newurl.active = true;
    urls[index] = newurl;
    setUrl(urls);
    console.log(url);
  };

  return (
    <div className="navbar full-width">
      <div className="flex-row sectors">
        {url.map((route, index) => (
          <Link
            key={index}
            to={route.url}
            draggable={false}
            className={route.active ? 'navbar--link-on' : 'navbar--link-off'}
            onClick={() => urlHandler(index)}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
