import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { colors } from '../../constants';
import AddCard from './AddCard'

import {createStackNavigator} from 'react-navigation-stack'

// const Payment = createStackNavigator({
//     AddCard: {
//         screen: AddCard
//     }
// })
class Payment extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Payment',
        drawerIcon: ({ tintColor }) => (
            <Feather
            name="credit-card"
            color={colors.drawerIcon}
            size={24}
            />
        ),
    };

    render() {
        return (
            <Text>Payment Screen</Text>
        );
    }
}


export default Payment