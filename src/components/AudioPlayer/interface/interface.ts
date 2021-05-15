export type musics = {
  title: string;
  url: string;
  playing?: boolean;
  thumb: string;
  ended: boolean;
  onPlay(): void;
  onEnded(): void;
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
  onBuffer: boolean;
}

export interface AudioOnProgress {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}
