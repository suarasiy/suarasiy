import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { ProfileProps, ImagesType } from '../profile/interface/interface';

import ButtonNavigation from '../../components/button-navigation/index';

import Avatar from '../../assets/images/img.jpg';

const Index: React.FC = () => {
  const [data, setData] = useState<ProfileProps>();
  const [ximg1, setXimg1] = useState<ImagesType[]>([]);
  const [ximg2, setXimg2] = useState<ImagesType[]>([]);
  const [ximg3, setXimg3] = useState<ImagesType[]>([]);

  const JsonDataImageDivider = (dataprofile: ProfileProps) => {
    const data = dataprofile;
    let current: 'ximg1' | 'ximg2' | 'ximg3' = 'ximg1';
    data.images?.map((image) => {
      console.log(current);
      if (current === 'ximg1') {
        current = 'ximg2';
        return setXimg1((ximg1) => [
          ...ximg1,
          {
            title: image.title,
            url: image.url,
          },
        ]);
      }
      if (current === 'ximg2') {
        current = 'ximg3';
        return setXimg2((ximg2) => [
          ...ximg2,
          {
            title: image.title,
            url: image.url,
          },
        ]);
      }
      if (current === 'ximg3') {
        current = 'ximg1';
        return setXimg3((ximg3) => [
          ...ximg3,
          {
            title: image.title,
            url: image.url,
          },
        ]);
      }
      return null;
    });
  };

  useEffect(() => {
    Axios.get(
      'https://raw.githubusercontent.com/suarasiy/myprofile/master/profile.json?token=AOC5TTX4RMHNPRQBM5KTEATAT5VMC'
    ).then((res) => {
      setData(res.data);
      JsonDataImageDivider(res.data);
    });
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="images-container">
      <div className="gallery">
        <div className="divide-gallery-3">
          {ximg1.map((image, index) => (
            <div key={index} className="ximg">
              <img src={image.url} alt={image.title} />
            </div>
          ))}
        </div>
        <div className="divide-gallery-2">
          {ximg2.map((image, index) => (
            <div key={index} className="ximg">
              <img src={image.url} alt={image.title} />
            </div>
          ))}
        </div>
        <div className="divide-gallery-1">
          {ximg1.map((image, index) => (
            <div key={index} className="ximg">
              <img src={image.url} alt={image.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="buttons-navigation-container">
        <ButtonNavigation
          navigations={[
            {
              url: '/suarasiy/profile',
              label: 'Profile',
              state: 'previous',
            },
            {
              url: '/suarasiy/music',
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
