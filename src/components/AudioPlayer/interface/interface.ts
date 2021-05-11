export type musics = {
  title: string;
  url: string;
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
}
