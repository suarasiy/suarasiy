import React, { useRef, useState } from 'react';
import {
  AudioControlsProps,
  AudioOnProgress,
  musics,
} from './interface/interface';

// ReactPlayer
import ReactPlayer from 'react-player';

// range-bar component
import { Range, getTrackBackground } from 'react-range';

import Anime from '../../assets/images/setsuna-album.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// BoxIcons
import {
  BiReset,
  BiVolume,
  BiVolumeLow,
  BiVolumeFull,
  BiVolumeMute,
} from 'react-icons/bi';

// RemixIcons
import {
  RiPlayCircleLine,
  RiPauseCircleLine,
  RiRewindLine,
  RiSpeedLine,
} from 'react-icons/ri';

const durationTransform = (n: number, fixed: number = 2): number => {
  return parseFloat((Math.round(n * 100) / 100).toFixed(fixed));
};

const Index: React.FC<musics> = ({ ...musics }) => {
  const [music] = useState(musics);
  const player = useRef<ReactPlayer>(null);

  const [state, setState] = useState<AudioControlsProps>({
    playing: music.playing!,
    played: 0,
    playedSeconds: 0,
    volume: 0.2,
    muted: false,
    duration: 0,
    ended: false,
  });

  const volumeIcon = state.muted ? (
    <BiVolumeMute size={30} fill="#3A71FF" />
  ) : state.volume <= 0 ? (
    <BiVolume size={30} fill="#3A71FF" />
  ) : state.volume <= 0.4 ? (
    <BiVolumeLow size={30} fill="#3A71FF" />
  ) : (
    <BiVolumeFull size={30} fill="#3A71FF" />
  );

  const handlePlay = (): void => {
    setState({
      ...state,
      playing: !state.playing,
    });
  };

  const handleUpdateDuration = (): void => {
    setState({
      ...state,
      duration: player.current?.getDuration()!,
    });
  };

  const handleDurationLabel = (n: number): string => {
    let hours = Math.floor(n / 60);
    let minutes = n % 60;
    return hours + ':' + minutes;
  };

  const handleToZero = (): void => {
    player.current?.seekTo(0);
  };

  const handleVolume = (value: number): void => {
    setState({ ...state, volume: value });
  };

  const handleMuteVolume = (): void => {
    setState({ ...state, muted: !state.muted });
  };

  const handleRewind = (): void => {
    player.current?.seekTo(state.playedSeconds - 10);
  };

  const handleForward = (): void => {
    player.current?.seekTo(state.playedSeconds + 10);
  };

  const handleOnProgress = (event: AudioOnProgress): void => {
    setState({ ...state, playedSeconds: event.playedSeconds });
  };

  const handleOnEnded = (): void => {
    setState({ ...state, playing: false, ended: true, playedSeconds: 0 });
    console.log('ended : ', state.playedSeconds);
  };

  return (
    <div className={'audio-player'.concat(state.playing ? '-on' : '-off')}>
      <button onClick={handlePlay}>
        {state.playing ? (
          <RiPauseCircleLine size={65} fill="#3A71FF" />
        ) : (
          <RiPlayCircleLine size={65} fill="#3A71FF" />
        )}
      </button>
      <div className="audio-info">
        <section>
          <span className="title">{music.title}</span>{' '}
          <span className="duration">
            {state.playing
              ? handleDurationLabel(durationTransform(state.playedSeconds, 0)) +
                ' - '
              : null}
            {handleDurationLabel(durationTransform(state.duration))}
          </span>
        </section>
        <div className="audio-control">
          <button className="button-icon" onClick={handleToZero}>
            <BiReset size={30} fill="#3A71FF" />
          </button>
          <button className="button-icon" onClick={handleRewind}>
            <RiRewindLine size={30} fill="#3A71FF" />
          </button>
          <button className="button-icon" onClick={handleForward}>
            <RiSpeedLine size={30} fill="#3A71FF" />
          </button>
          <button className="button-icon" onClick={handleMuteVolume}>
            {volumeIcon}
          </button>
          <Range
            step={0.05}
            min={0}
            max={1}
            values={[0.8]}
            onChange={(values) => handleVolume(values[0])}
            renderTrack={({ props, children }) => (
              <div {...props} className="volume-track">
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: '10px',
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: '4px',
                      width: '100%',
                      borderRadius: '4px',
                      background: getTrackBackground({
                        colors: ['#3A71FF', '#1c419f'],
                        values: [state.volume],
                        min: 0,
                        max: 1,
                      }),
                    }}
                  ></div>
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '0',
                  width: '0',
                  backgroundColor: '#FFF',
                }}
              />
            )}
          />
        </div>
      </div>
      <span className="progress-track-container">
        <span
          className="progress-track-fill"
          style={{
            width: `${
              !state.ended
                ? (durationTransform(state.playedSeconds) * 100) /
                  state.duration
                : 0
            }%`,
          }}
        ></span>
      </span>
      <div className="thumbnail">
        <LazyLoadImage src={Anime} alt="Thumbnails" />
      </div>
      <ReactPlayer
        ref={player}
        url={music.url}
        width="0"
        height="0"
        onProgress={(event) => handleOnProgress(event)}
        onEnded={handleOnEnded}
        onPlay={() => setState({ ...state, ended: false })}
        playing={state.playing}
        volume={state.volume}
        muted={state.muted}
        onReady={handleUpdateDuration}
      />
    </div>
  );
};

export default Index;
