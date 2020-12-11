import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PlaylistsView from '@src/components/PlaylistsView';
import SongsView from '@src/components/SongsView';

const Tabbed = createMaterialTopTabNavigator();

export default function TabbedNavigationRoot(): JSX.Element {
  return (
    <Tabbed.Navigator>
      <Tabbed.Screen name="Playlists" component={PlaylistsView} />
      <Tabbed.Screen name="Songs" component={SongsView} />
    </Tabbed.Navigator>
  );
}
