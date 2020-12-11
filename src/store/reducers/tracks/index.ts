import { IEvent } from '@src/store/events/IEvent';
import { ITracksState } from '@src/store/IState';

const defaultState: ITracksState = {
  tracks: [
    {
      id: '1',
      title: 'White Wedding',
      artist: 'Billy Idol',
      album: '',
      description: '',
    },
    {
      id: '2',
      title: 'Blame It on Me',
      artist: 'George Ezra',
      album: '',
      description: '',
    },
    {
      id: '3',
      title: 'Don\'t Speak',
      artist: 'No Doubt',
      album: '',
      description: '',
    },
    {
      id: '4',
      title: 'Breaking Up the Girl',
      artist: 'Garbage',
      album: '',
      description: '',
    },
    {
      id: '5',
      title: 'Valerie',
      artist: 'Steve Winwood',
      album: '',
      description: '',
    },
    {
      id: '6',
      title: 'Lola',
      artist: 'The Kinks',
      album: '',
      description: '',
    },
  ],
};

export default function(state: ITracksState | null, event: IEvent): ITracksState {
  return defaultState;
}
