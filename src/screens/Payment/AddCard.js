import React, { Component, useState } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { colors, theme } from '../../constants';

const AddCard = () => {
    const [cardNo, setCardNo] = useState('')
    const [cvv, setCvv] = useState('')
    const [date, setDate] = useState('')
    return (
        <ScrollView style={{ backgroundColor: colors.body }}>
            <View style={styles.container}>
                <TextInput
                    keyboardType="numeric"
                    style={styles.textInput} />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, }}>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.halfTextInput} />
                    <TextInput
                        keyboardType="numeric"
                        style={([styles.halfTextInput, { marginLeft: 10 }])} />
                </View>
                <TouchableOpacity
                    style={styles.button}
                // onPress={() => navigation.navigate("AddCard")}
                >
                    <Text style={styles.innerButton}>Add Card</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

AddCard.navigationOptions = ({ navigation }) => {
    return {
        title: 'Add Card',
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Feather
                    name="chevron-left"
                    color={colors.mainBlue}
                    style={{ padding: 10, }}
                    size={24}
                />
                {/* <Text style={{ padding: 10, marginRight: 30, fontSize: 14, color: colors.mainBlue }}>Add Card</Text> */}
            </TouchableOpacity>
        )
    }
};

export default AddCard


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
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
        marginTop: 20,
    },
    innerButton: {
        // flex: 1,
        textAlign: 'center',
        paddingVertical: 20,
        color: colors.white,
        fontSize: 16
    },
    textInput: {
        borderWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: colors.greyed,
        ...theme.borderRadius(),
    },
    halfTextInput: {
        flex: 4.5,
        borderWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: colors.greyed,
        ...theme.borderRadius(),
    }
})