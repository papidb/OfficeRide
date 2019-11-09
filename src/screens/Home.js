import React, { Component, useEffect } from 'react'
import { View, ActivityIndicator, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Map from '../components/Map'
import MapControls from '../components/MapControls'
import Feather from 'react-native-vector-icons/Feather'
import Avatar from '../components/Avatar'
import { colors } from '../constants';


let radius = 30

const Home = ({ navigation, ...props }) => {
    useEffect(() => {
        // navigation.navigate("AddCard")
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={navigation.openDrawer}
                style={styles.avatar}>
                <View style={{
                    position: 'relative'
                }}>
                    <Avatar
                        circular
                        radius={radius}
                        src={require("../../assets/images/avatar2.jpg")}
                    />
                </View>
            </TouchableOpacity>
            <Map />
            <MapControls />
        </View>
    )
}
Home.navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
        <Feather
            name="home"
            color={colors.drawerIcon}
            size={24}
        />
    ),
};

const styles = StyleSheet.create({
    avatar: {
        position: 'absolute',
        zIndex: 1,
        left: 20,
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        top: 80,

        backgroundColor: 'grey',

    }
})

export default Home;