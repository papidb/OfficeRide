import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import { colors, theme } from '../constants'
import Circle from './Circle'
import QrTicket from './QrTicket'

const BusStatus = (props) => {
    return (
        <TouchableOpacity style={styles.busStatus}>
            <Text style={styles.busStatusText}>Your bus is 5 minute away</Text>
        </TouchableOpacity>
    )
}

function Address({ children, borderBottom }) {
    return (
        <View style={([
            { flex: 1 },
            borderBottom ? {
                borderBottomWidth: 1,
                borderBottomColor: colors.qrColor,
            } : null
        ])}>
            {children}
        </View>
    )
}

const AddressToAndFro = (props) => {
    return (
        <View style={styles.addressToAndFro}>
            <View style={{ width: 30, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20 }}>
                <Circle size={16} innerCircle={6} color="#6772E5" />
                <Circle size={2} />
                <Circle size={2} />
                <Circle size={2} />
                <Circle size={2} />
                <Circle size={16} innerCircle={6} color="#24B47E" />
            </View>
            <View style={{ flex: 1 }}>
                <Address borderBottom>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'space-around' }}>
                        <Text>Ajah</Text>
                    </TouchableOpacity>
                </Address>
                <Address>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'space-around' }}>
                        <Text>Ikorodu</Text>
                    </TouchableOpacity>
                </Address>
            </View>
            <View style={{ width: 10 }} />
        </View>
    )
}

class MapControls extends Component {
    async componentDidMount() {
    }
    render() {
        return (
            <View style={styles.container}>
                <BusStatus />
                <View style={styles.controls}>
                    <AddressToAndFro />
                    <QrTicket />
                </View>
            </View>
        )
    }
}
export default MapControls

const styles = StyleSheet.create({
    container: {
        flex: 0.25,
        flexDirection: 'column',
        padding: 10,
        flexWrap: 'wrap',
        // alignItems: 'flex-end',
    },
    busStatus: {
        backgroundColor: colors.mainBlue,
        justifyContent: 'center',
        margin: 5,
        ...theme.borderRadius(5)
    },
    busStatusText: {
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
        color: colors.white
    },
    addressToAndFro: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        flex: 7,
        marginRight: 10,
        ...theme.borderRadius(5),
        ...theme.normalShadow
    },
    controls: {
        flex: 1,
        flexDirection: 'row',
    },
    qrCode: {
        flex: 3,
        backgroundColor: 'white',
        padding: 5,
        ...theme.borderRadius(5)
        // alignItems: 'stretch',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
    }
});