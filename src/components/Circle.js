import React from 'react'
import { View } from 'react-native'
// import PropTypes from 'prop-types'
import { colors } from '../constants'

function CircleStyle(size, color) {
    return {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
    }
}

export default function ({ color = colors.greyed, innerCircle, innerCircleColor = colors.white, size = 24, ...props }) {
    return (
        <View style={{
            ...CircleStyle(size, color)
        }}>
            {innerCircle && (
                <View style={{
                    ...CircleStyle(innerCircle, innerCircleColor),
                    position: 'absolute',
                    top: (size / 2) - (innerCircle / 2),
                    right: (size / 2) - (innerCircle / 2),
                }}>
                </View>
            )}
        </View>
    )
}

