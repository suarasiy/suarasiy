import React from 'react';

import imgprofile from '../../assets/images/img.jpg';
// import { ProfileProps } from './interface/interface';

const Index: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img src={imgprofile} alt="profile" />
      </div>
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
      <button class="button-navigation">NEXT</button>
    </div>
  );
};

export default Index;
