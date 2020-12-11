import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ITrack } from '@src/models/ITrack';
import { tile } from '@src/styles';

const styles = StyleSheet.create({
  container: {
    margin: tile.margins.container,
  },
  tile: {
    backgroundColor: tile.colours.background,
    padding: tile.margins.inner,
  },
  title: {
    fontSize: tile.font.size.primary,
    color: tile.colours.text.primary,
  },
  artist: {
    fontSize: tile.font.size.secondary,
    marginLeft: tile.margins.textOffset,
    color: tile.colours.text.secondary,
  },
});

interface IProps {
  track: ITrack;
}

export default function SongTile({ track }: IProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable style={styles.tile}>
        <Text style={styles.title}>{track.title}</Text>
        <Text style={styles.artist}>{track.artist}</Text>
      </Pressable>
    </View>
  );
}
