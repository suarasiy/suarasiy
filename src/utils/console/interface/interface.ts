export interface ConsoleMusicType {
  type: 'MUSIC';
  status: 'PLAYING' | 'PAUSED' | 'ENDED' | 'SWITCHING';
  title: string;
}
