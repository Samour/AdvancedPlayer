import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import TabbedNavigationRoot from './src/components/TabbedNavigationRoot';
import store from './src/store/store';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabbedNavigationRoot />
      </NavigationContainer>
    </Provider>
  );
};
