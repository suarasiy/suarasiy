import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import { AudioPlayerProps } from '../../components/AudioPlayer/interface/interface';

// import ReactPlayer from 'react-player';
import AudioPlayer from '../../components/AudioPlayer/index';

import ButtonNavigation from '../../components/button-navigation/index';

import { resources } from '../../data/index';

const Index: React.FC = () => {
  const [music, setMusic] = useState<AudioPlayerProps>();

  useEffect(() => {
    Axios.get(resources).then((res) => setMusic(res.data));
  }, []);

  return (
    <div className="music-container">
      <div className="musics">
        {music?.musics?.map((music, index) => (
          <AudioPlayer key={index} url={music.url} title={music.title} />
        ))}
      </div>
      <div className="buttons-navigation-container">
        <ButtonNavigation
          navigations={[
            {
              url: '/suarasiy/images',
              label: 'Images',
              state: 'previous',
            },
            {
              url: '/suarasiy/profile',
              label: 'Profile',
              state: 'next',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
