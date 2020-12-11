import { ITrack } from '@src/models/ITrack';

export interface ITracksState {
  tracks: ITrack[];
}

export interface IState {
  trackData: ITracksState;
}
