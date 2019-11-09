import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { colors, theme } from '../../constants';
import AddCard from './AddCard'

import { Details } from '../../components'

export default function NoCard({ navigation, ...props }) {
    return (
        <View style={styles.inner}>
            <Image
                source={require('../../../assets/ic/Card.png')}
            />
            <Details
                header="No payment method"
                headerSize={20}
                textSize={14}
                text="Add a payment method to start riding with us."
                align="center"
                style={{ marginVertical: 20 }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("AddCard")}>
                <Text style={styles.innerButton}>Add a new Card</Text>
            </TouchableOpacity>
        </View>
    )
}

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
});