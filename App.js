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

function SetCustomText(customProps) {
    const TextRender = Text.render
    const initialDefaultProps = Text.defaultProps
    Text.defaultProps = {
        ...initialDefaultProps,
        ...customProps
    }
    Text.render = function render(props) {
        let oldProps = props
        props = { ...props, style: [customProps.style, props.style] }
        try {
            return TextRender.apply(this, arguments)
        } finally {
            props = oldProps
        }
    }
}

const customTextProps = {
  style: {
    // fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    // color: 'blue'
  }
};

SetCustomText(customTextProps)


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
