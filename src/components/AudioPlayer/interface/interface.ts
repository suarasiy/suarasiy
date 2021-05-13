export type musics = {
  title: string;
  url: string;
  playing?: boolean;
};

export interface AudioPlayerProps {
  musics: musics[];
}

export interface AudioControlsProps {
  playing: boolean;
  played: number;
  playedSeconds: number;
  volume: number;
  muted: boolean;
  duration: number;
  ended: boolean;
}
