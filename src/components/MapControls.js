import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import { colors, theme } from '../constants'
import Circle from './Circle'


const BusStatus = (props) => {
    return (
        <TouchableOpacity style={styles.busStatus}>
            <Text style={styles.busStatusText}>Your bus is 5 minute away</Text>
        </TouchableOpacity>
    )
}
const QrTicket = (props) => {
    return (
        <TouchableOpacity style={styles.qrCode}>
            <View style={{
                backgroundColor: colors.white,
                justifyContent: 'center',
                flex: 1,
                height: '100%'
            }
            }>
                <View style={{ alignItems: 'center' }}>
                    <QRCode
                        value='Help my life, I need a Job, https://github.com/benjamin-daniel'
                        size={50}
                        bgColor='purple'
                        fgColor='white'
                        color={colors.qrColor}
                    />
                </View>

                <Text style={{ textAlign: 'center', fontSize: 14 }}>View Ticket</Text>

            </View>
        </TouchableOpacity>
    )
}
function Address({ children, borderBottom }) {
    return (
        <View style={([
            { flex: 1, justifyContent: 'space-around' },
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
                    <Text>Ajah</Text>
                </Address>
                <Address>
                    <Text>Ikorodu</Text>
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