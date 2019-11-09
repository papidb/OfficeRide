import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { colors } from '../../constants';

class AddCard extends React.Component {
    static navigationOptions = {
        title: 'Add Card',
        // header: ''
        // drawerLabel: 'Payment',
        // drawerIcon: ({ tintColor }) => (
        //     <Feather
        //     name="credit-card"
        //     color={colors.drawerIcon}
        //     size={24}
        //     />
        // ),
    };

    render() {
        return (
            <Text>Add Card</Text>
        );
    }
}


export default AddCard