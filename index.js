/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {AppProvider} from './src/context';

const provider = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

AppRegistry.registerComponent(appName, () => provider);
