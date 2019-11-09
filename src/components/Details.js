import React, { Component, useState } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import { colors, theme } from '../constants'

export default function Details({ header, text, right, textColor, textSize, align, style, headerSize }) {
    return (
        <View style={style}>
            <Text style={([
                { fontSize: 15 },
                right ? { textAlign: 'right' } : null,
                align && { textAlign: align },
                headerSize && { fontSize: headerSize },

            ])}>
                {header}
            </Text>
            <Text style={([
                { fontSize: 15, marginBottom: 5, fontFamily: 'ProximaNova-Semibold' },
                right ? { textAlign: 'right' } : null,
                textColor ? { color: colors.mainBlue } : null,
                textSize && { fontSize: textSize },
                align && { textAlign: align },
            ])}>
                {text}
            </Text>
        </View>
    )
}