export interface ISubtitle {
  eng: string;
  rus: string;
}

export interface IEpisode {
  name: string;
  subtitles: ISubtitle[];
}

export type TEpisodes = Record<string, IEpisode>;

export type TSeason = Record<string, TEpisodes>;

export interface ISerial {
  name: string;
  description: string;
  seasons: TSeason;
}

export type TSerailsList = Record<string, ISerial>;
