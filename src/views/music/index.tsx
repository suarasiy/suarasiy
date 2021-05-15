import React, { useEffect, useState } from 'react';

import Axios from 'axios';

// bug on buffer start

import {
  AudioPlayerProps,
  musics,
} from '../../components/AudioPlayer/interface/interface';

import AudioPlayer from '../../components/AudioPlayer/index';

import ButtonNavigation from '../../components/button-navigation/index';

import { resources } from '../../data/index';

import { ConsoleMusic } from '../../utils/console/index';

const Index: React.FC = () => {
  const [music, setMusic] = useState<AudioPlayerProps>();
  const [state, setState] = useState<musics[]>([]);

  useEffect(() => {
    Axios.get(resources).then((res) => setMusic(res.data));
  }, []);

  useEffect(() => {
    if (typeof music !== undefined) {
      setState(music?.musics!);
    }
  }, [music]);

  const handlePlay = (index: number) => {
    state?.map((music) => {
      if (music.playing === true) {
        if (music.title !== state![index].title) {
          ConsoleMusic({
            type: 'MUSIC',
            status: 'PAUSED',
            title: music.title,
          });
          ConsoleMusic({
            type: 'MUSIC',
            status: 'SWITCHING',
            title: state![index].title,
          });
        }
      }
    });
    if (state![index].playing === true) {
      state![index].playing = false;
      ConsoleMusic({
        type: 'MUSIC',
        status: 'PAUSED',
        title: state![index].title,
      });
      return setState([...state!]);
    }
    state?.map((music) => {
      return (music.playing = false);
    });
    state![index].playing = true;
    setState([...state!]);
    ConsoleMusic({
      type: 'MUSIC',
      status: 'PLAYING',
      title: state![index].title,
    });
  };

  const handleBufferStart = (index: number): void => {
    state![index].bufferStatus = 'READY';
    state?.map((music) => {
      return (music.playing = false);
    });
    state![index].playing = true;
    setState([...state!]);
    console.log(state![index].bufferStatus);
  };

  const handleEnded = (index: number): void => {
    state?.map((music) => {
      return (music.playing = false);
    });
    setState([...state!]);
    ConsoleMusic({
      type: 'MUSIC',
      status: 'ENDED',
      title: state![index].title,
    });
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
            ended={music.ended}
            bufferStatus={music.bufferStatus}
            onPlay={() => handlePlay(index)}
            onEnded={() => handleEnded(index)}
            onStart={() => handleBufferStart(index)}
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
