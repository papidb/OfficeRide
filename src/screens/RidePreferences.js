import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { colors } from '../constants';


class RidePreference extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Ride Preference',
        drawerIcon: ({ tintColor }) => (
            <Feather
                name="settings"
                color={colors.drawerIcon}
                size={24}
            />
        ),
    };

    render() {
        return (
            <Text>Ride Preference Screen</Text>
        );
    }
}


export default RidePreference