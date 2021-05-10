import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { ProfileProps, ImagesType } from '../profile/interface/interface';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ButtonNavigation from '../../components/button-navigation/index';

import { resources } from '../../data';

const Index: React.FC = () => {
  const [ximg1, setXimg1] = useState<ImagesType[]>([]);
  const [ximg2, setXimg2] = useState<ImagesType[]>([]);
  const [ximg3, setXimg3] = useState<ImagesType[]>([]);

  const JsonDataImageDivider = (dataprofile: ProfileProps) => {
    const data = dataprofile;
    let current: 'ximg1' | 'ximg2' | 'ximg3' = 'ximg1';
    data.images?.map((image) => {
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
    Axios.get(resources).then((res) => {
      JsonDataImageDivider(res.data);
    });
  }, []);

  return (
    <div className="images-container">
      <div className="gallery">
        <div className="divide-gallery-3">
          {ximg1.map((image, index) => (
            <div key={index} className="ximg">
              <LazyLoadImage
                effect="blur"
                src={image.url}
                alt={image.title}
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="divide-gallery-2">
          {ximg2.map((image, index) => (
            <div key={index} className="ximg">
              <LazyLoadImage
                effect="blur"
                src={image.url}
                alt={image.title}
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="divide-gallery-1">
          {ximg3.map((image, index) => (
            <div key={index} className="ximg">
              <LazyLoadImage
                effect="blur"
                src={image.url}
                alt={image.title}
                draggable={false}
              />
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
