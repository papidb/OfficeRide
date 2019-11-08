import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, SafeAreaView } from 'react-native'

import MapboxGL from "@react-native-mapbox-gl/maps";
import { ACCESSTOKEN } from 'react-native-dotenv';
const device = Dimensions.get('screen');

MapboxGL.setAccessToken(ACCESSTOKEN);

class Map extends Component {
    async componentDidMount() {
        MapboxGL.setTelemetryEnabled(false);
    }
    render() {
        return (
            <View style={{ flex: 1, height: '100%' }}>
                <View style={styles.page}>
                    <View style={styles.container}>
                        <MapboxGL.MapView
                            styleURL={'mapbox://styles/benjamin-daniel/ck2q8g3911pk61cqun7khpq6q'}
                            ref={(ref) => this._map = ref}
                            style={styles.map}
                        >
                            <MapboxGL.Camera
                                zoomLevel={18}
                                centerCoordinate={[3.3886, 6.5151]}
                            />
                        </MapboxGL.MapView>
                    </View>
                </View>
            </View>
        )
    }
}
export default Map

const styles = StyleSheet.create({
    page: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        position: 'absolute',
        zIndex: -1,
    },
    container: {
        height: device.height,
        width: device.width,
        // backgroundColor: "tomato",
    },
    map: {
        height: device.height,
        flex: 1,
    }
});