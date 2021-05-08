import React from 'react';
// import { ProfileProps } from './interface/interface';

import imgprofile from '../../assets/images/img.jpg';

import ButtonNavigation from '../../components/button-navigation/index';

const Index: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img src={imgprofile} alt="profile" />
      </div>
      <div className="table-container">
        <table className="profile-table">
          <tbody>
            <tr>
              <th>Name :</th>
              <td>My Name</td>
            </tr>
            <tr>
              <th>Age :</th>
              <td>My Age</td>
            </tr>
            <tr>
              <th>Location :</th>
              <td>My location</td>
            </tr>
            <tr>
              <th>Passion :</th>
              <td>JavaScript Frontend & Backend, UIX</td>
            </tr>
            <tr>
              <th>Level :</th>
              <td>Beginner</td>
            </tr>
            <tr>
              <th>Bio :</th>
              <td>My short bio</td>
            </tr>
            <tr>
              <th>I like :</th>
              <td>Learning</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttons-navigation-container">
        <ButtonNavigation
          navigations={[
            { url: '/music', label: 'Music', state: 'previous' },
            { url: '/images', label: 'Images', state: 'next' },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
