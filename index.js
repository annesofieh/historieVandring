// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('historieVandring', () => App);

import React, { Component } from 'react';
import HistorieVandring from './app/containers/HistorieVandring.js';
import { AppRegistry } from 'react-native';
import app from './app/containers/app';

AppRegistry.registerComponent('historieVandring', () => app);