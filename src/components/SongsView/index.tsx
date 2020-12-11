import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { ITrack } from '@src/models/ITrack';
import { IState } from '@src/store/IState';
import SongTile from '../SongTile';

interface IMappedProps {
  tracks: ITrack[];
}

const mapToProps = (state: IState): IMappedProps => ({
  tracks: state.trackData.tracks,
});

function TabbedNavigationRoot({ tracks }: IMappedProps): JSX.Element {
  return (
    <SafeAreaView>
      <FlatList data={tracks} renderItem={({ item }) => <SongTile track={item} />} />
    </SafeAreaView>
  );
}

export default connect(mapToProps)(TabbedNavigationRoot);
