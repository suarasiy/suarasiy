import React, { useState, useEffect } from 'react';
import { ProfileProps } from './interface/interface';

import Axios from 'axios';

import imgprofile from '../../assets/images/img.jpg';

import ButtonNavigation from '../../components/button-navigation/index';

const Index: React.FC = () => {
  const [data, setData] = useState<ProfileProps>();

  useEffect(() => {
    Axios.get(
      'https://raw.githubusercontent.com/suarasiy/myprofile/master/profile.json?token=AOC5TTX4RMHNPRQBM5KTEATAT5VMC'
    ).then((res) => setData(res.data));
  }, []);

  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img src={imgprofile} alt="profile" draggable={false} />
        <span></span>
      </div>
      <div className="table-container">
        <table className="profile-table">
          <tbody>
            <tr>
              <th>Name :</th>
              <td>{data?.fullName}</td>
            </tr>
            <tr>
              <th>Age :</th>
              <td>{data?.age}</td>
            </tr>
            <tr>
              <th>Location :</th>
              <td>{data?.location}</td>
            </tr>
            <tr>
              <th>Passion :</th>
              <td>{data?.passion}</td>
            </tr>
            <tr>
              <th>Level :</th>
              <td>{data?.level}</td>
            </tr>
            <tr>
              <th>Bio :</th>
              <td>{data?.bio}</td>
            </tr>
            <tr>
              <th>I like :</th>
              <td>{data?.liked}</td>
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
