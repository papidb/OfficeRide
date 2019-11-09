import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { colors, theme } from '../../constants';
import AddCard from './AddCard'

import { Details } from '../../components'
import NoCard from './NoCard'


class Payment extends React.Component {
    static navigationOptions = ({ navigation }) => {
        console.log(navigation.openDrawer)
        return {
            title: 'Payment',
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate("AddCard")}>
                    <Text style={{ padding: 10, marginRight: 10, fontSize: 14, color: colors.mainBlue, fontWeight: '500', }}>Add Card</Text>
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}>
                    <Feather
                        style={{ marginLeft: 10 }}
                        name="menu"
                        size={30}
                    />
                </TouchableOpacity>
            )
        }
    };

    render() {
        return (
            <ScrollView style={{ backgroundColor: colors.body }}>
                <View style={styles.container}>
                    <NoCard navigation={this.props.navigation} />
                </View>
            </ScrollView>
        );
    }
}


export default Payment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    inner: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.mainBlue,
        ...theme.borderRadius(5),
    },
    innerButton: {
        // flex: 1,
        textAlign: 'center',
        paddingVertical: 20,
        color: colors.white,
        fontSize: 16
    }
})