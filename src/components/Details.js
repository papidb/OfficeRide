import React, { Component, useState } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import { colors, theme } from '../constants'

export default function Details({ header, text, right, textColor, textSize }) {
    return (
        <View>
            <Text style={([
                { fontSize: 15 },
                right ? { textAlign: 'right' } : null
            ])}>
                {header}
            </Text>
            <Text style={([
                { fontSize: 15, marginBottom: 5, fontFamily: 'ProximaNova-Semibold' },
                right ? { textAlign: 'right' } : null,
                textColor ? { color: colors.mainBlue } : null,
                textSize && { fontSize: textSize }
            ])}>
                {text}
            </Text>
        </View>
    )
}