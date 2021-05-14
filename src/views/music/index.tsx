import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import {
  AudioPlayerProps,
  musics,
} from '../../components/AudioPlayer/interface/interface';

// import ReactPlayer from 'react-player';
import AudioPlayer from '../../components/AudioPlayer/index';

import ButtonNavigation from '../../components/button-navigation/index';

import { resources } from '../../data/index';

const Index: React.FC = () => {
  const [music, setMusic] = useState<AudioPlayerProps>();
  const [state, setState] = useState<musics[] | undefined>([]);

  useEffect(() => {
    Axios.get(resources).then((res) => setMusic(res.data));
  }, []);

  useEffect(() => {
    if (typeof music !== undefined) {
      setState(music?.musics);
    }
    // if (typeof state !== undefined) {
    //   state?.map((music, index) => {
    //     return (state[index].playing = false);
    //   });
    // }
  }, [music]);

  const handlePlay = (index: number) => {
    if (state![index].playing === true) {
      state![index].playing = false;
      return setState([...state!]);
    }
    state?.map((music) => {
      return (music.playing = false);
    });
    state![index].playing = true;
    setState([...state!]);
  };

  return (
    <div className="music-container">
      <div className="musics">
        {state?.map((music, index) => (
          <AudioPlayer
            key={index}
            url={music.url}
            title={music.title}
            thumb={music.thumb}
            playing={music.playing}
            onPlay={() => handlePlay(index)}
          />
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
