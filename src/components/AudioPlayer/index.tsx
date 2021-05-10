import React, { useRef, useState } from 'react';
// import { AudioPlayerProps } from './interface/interface';

// ReactPlayer
import ReactPlayer from 'react-player';

// range
import { Range, getTrackBackground } from 'react-range';

import { musics } from './interface/interface';
// icons
import { BiPlayCircle, BiPauseCircle, BiSync } from 'react-icons/bi';

const Index: React.FC<musics> = ({ ...musics }) => {
  const [val, setVal] = useState([0.1]);
  const [state, setState] = useState({
    playing: false,
    played: 0,
    playedSeconds: 0,
  });

  const [music] = useState(musics);

  const player = useRef<ReactPlayer>(null);

  const handleToZero = () => {
    player.current?.seekTo(0);
  };

  return (
    <div className={'audio-player'.concat(state.playing ? '-on' : '-off')}>
      <button onClick={() => setState({ ...state, playing: !state.playing })}>
        {state.playing ? (
          <BiPauseCircle size={65} fill="#3A71FF" />
        ) : (
          <BiPlayCircle size={65} fill="#3A71FF" />
        )}
      </button>
      <div className="audio-info">
        <span className="title">{music.title}</span>
        <div className="audio-control">
          <button onClick={handleToZero}>
            <BiSync size={30} fill="#3A71FF" />
          </button>
          <Range
            step={0.05}
            min={0}
            max={1}
            values={val}
            onChange={(values) => setVal(values)}
            renderTrack={({ props, children }) => (
              <div {...props} className="progress-track">
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: '46px',
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
                        values: val,
                        colors: ['#3A71FF', '#1c419f'],
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
        volume={0.1}
      />
    </div>
  );
};

export default Index;
