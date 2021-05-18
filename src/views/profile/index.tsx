import React, { useState, useEffect } from 'react';
import { ProfileProps } from './interface/interface';

import Axios from 'axios';

import imgprofile from '../../assets/images/img.jpg';

import ButtonNavigation from '../../components/button-navigation/index';

import { resources } from '../../data';

const Index: React.FC = () => {
  const [data, setData] = useState<ProfileProps>();

  useEffect(() => {
    Axios.get(resources).then((res) => setData(res.data));
  }, []);

  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img src={data?.photo} alt="profile" draggable={false} />
        <span></span>
      </div>
      <div className="table-container">
        <table className="profile-table">
          <tbody>
            <tr>
              <th>Name :</th>
              <td>{data?.fullName ? data?.fullName : 'Loading...'}</td>
            </tr>
            <tr>
              <th>Age :</th>
              <td>{data?.age ? data?.age : 'Loading...'}</td>
            </tr>
            <tr>
              <th>Location :</th>
              <td>{data?.location ? data?.location : 'Loading...'}</td>
            </tr>
            <tr>
              <th>Passion :</th>
              <td>{data?.passion ? data?.passion : 'Loading...'}</td>
            </tr>
            <tr>
              <th>Level :</th>
              <td>{data?.level ? data?.level : 'Loading...'}</td>
            </tr>
            <tr>
              <th>Bio :</th>
              <td>{data?.bio ? data?.bio : 'Loading...'}</td>
            </tr>
            <tr>
              <th>I like :</th>
              <td>{data?.liked ? data?.liked : 'Loading...'}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttons-navigation-container">
        <ButtonNavigation
          navigations={[
            { url: '/suarasiy/music', label: 'Music', state: 'previous' },
            { url: '/suarasiy/images', label: 'Images', state: 'next' },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
