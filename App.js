import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Map from './src/components/Map'
import MapControls from './src/components/MapControls.js'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Map />
        <MapControls />
      </SafeAreaView>
    </>
  );
};


export default App;
