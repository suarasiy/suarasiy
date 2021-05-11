import React, { useRef, useState } from 'react';
import { AudioControlsProps, musics } from './interface/interface';

// ReactPlayer
import ReactPlayer from 'react-player';

// range-bar component
import { Range, getTrackBackground } from 'react-range';

// BoxIcons
import {
  BiReset,
  BiVolume,
  BiVolumeLow,
  BiVolumeFull,
  BiVolumeMute,
} from 'react-icons/bi';

// RemixIcons
import { RiPlayCircleLine, RiPauseCircleLine } from 'react-icons/ri';

const Index: React.FC<musics> = ({ ...musics }) => {
  const [music] = useState(musics);

  const [state, setState] = useState<AudioControlsProps>({
    playing: false,
    played: 0,
    playedSeconds: 0,
    volume: 0.2,
    muted: false,
  });

  const player = useRef<ReactPlayer>(null);

  const volumeIcon = state.muted ? (
    <BiVolumeMute size={30} fill="#3A71FF" />
  ) : state.volume <= 0 ? (
    <BiVolume size={30} fill="#3A71FF" />
  ) : state.volume <= 0.4 ? (
    <BiVolumeLow size={30} fill="#3A71FF" />
  ) : (
    <BiVolumeFull size={30} fill="#3A71FF" />
  );

  const handleToZero = (): void => {
    player.current?.seekTo(0);
  };

  const handleVolume = (value: number): void => {
    setState({ ...state, volume: value });
  };

  const handleMuteVolume = (): void => {
    setState({ ...state, muted: !state.muted });
  };

  return (
    <div className={'audio-player'.concat(state.playing ? '-on' : '-off')}>
      <button onClick={() => setState({ ...state, playing: !state.playing })}>
        {state.playing ? (
          <RiPauseCircleLine size={65} fill="#3A71FF" />
        ) : (
          <RiPlayCircleLine size={65} fill="#3A71FF" />
        )}
      </button>
      <div className="audio-info">
        <span className="title">{music.title}</span>
        <div className="audio-control">
          <button className="button-icon" onClick={handleToZero}>
            <BiReset size={30} fill="#3A71FF" />
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
              <div {...props} className="progress-track">
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
      <ReactPlayer
        ref={player}
        url={music.url}
        width="0"
        height="0"
        playing={state.playing}
        volume={state.volume}
        muted={state.muted}
      />
    </div>
  );
};

export default Index;
