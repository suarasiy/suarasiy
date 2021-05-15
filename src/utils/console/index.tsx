import { ConsoleMusicType } from './interface/interface';

export const ConsoleMusic = (data: ConsoleMusicType) => {
  switch (true) {
    case data.status === 'PLAYING':
      console.log(
        '%cPlaying%c%s',
        'color: #3a71ff; padding: 4px 7px; margin: 6px 6px 6px 0; border-radius: 3px; background-color: #3a72ff3f;',
        'color: #3a71ff; margin: 6px',
        data.title
      );
      break;
    case data.status === 'PAUSED':
      console.log(
        '%cPaused%c%s',
        'color: #ffc13a; padding: 4px 7px; margin: 6px 6px 6px 0; border-radius: 3px; background-color: #ffc13a3f;',
        'color: #ffc13a; margin: 6px',
        data.title
      );
      break;
    case data.status === 'ENDED':
      console.log(
        '%cEnded%c%s',
        'color: #ff3a7c; padding: 4px 7px; margin: 6px 6px 6px 0; border-radius: 3px; background-color: #ff3a7c3f;',
        'color: #ff3a7c; margin: 6px',
        data.title
      );
      break;
    case data.status === 'SWITCHING':
      console.log(
        '%cSwitching to%c%s',
        'color: #24db33; padding: 4px 7px; margin: 6px 6px 6px 0; border-radius: 3px; background-color: #24db333f;',
        'color: #24db33; margin: 6px',
        data.title
      );
  }
};
