import React, { Component, useState } from 'react'
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import { colors, theme } from '../constants'
import Modal from "react-native-modal";

function Details({ header, text, right, textColor, textSize }) {
    return (
        <View>
            <Text style={([
                { fontSize: 15 },
                right ? { textAlign: 'right' } : null
            ])}>
                {header}
            </Text>
            <Text style={([
                { fontSize: 15, marginBottom: 5,  fontFamily: 'ProximaNova-Semibold' },
                right ? { textAlign: 'right' } : null,
                textColor ? { color: colors.mainBlue } : null,
                textSize && { fontSize: textSize }
            ])}>
                {text}
            </Text>
        </View>
    )
}

const QRTicketModal = ({ isVisible, setVisible, ...props }) => {
    return (
        <Modal
            coverScreen={true}
            backdropColor={colors.modal}
            onBackdropPress={() => setVisible(!isVisible)}
            isVisible={isVisible}>
            <View style={theme.modalContent}>
                <View style={styles.details}>
                    <View style={([styles.default], { padding: 10 })}>
                        <QRCode
                            value="Employ me mate!, https://github.com/benjamin-daniel"
                            color={colors.qrColor}
                            size={120}
                        />

                    </View>
                    <View style={([styles.default], { justifyContent: 'center' })}>
                        <Details header="Passenger Name" text="Adegoke Damola Tobi" />
                        <Details header="Ticket Type" text="To and fro" />
                    </View>
                </View>
                <View style={{ height: 10 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Details header='Driver Name' text="Samuel Moose" textSize={18} />
                    <Details header='Ticket Number' text="ZX112222Q" textSize={18} right textColor />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Details header='Bus Number' text="AAA 123 AB" textSize={18} />
                    <Details header='Expiry Date' text="12 Oct 2018" textSize={18} right />
                </View>
                <TouchableOpacity style={{ backgroundColor: colors.mainBlue, width: '100%', justifyContent: 'center', alignItems: 'center', ...theme.borderRadius(5) }}>
                    <Text style={{ padding: 15, color: colors.white, fontSize: 20 }}>Save</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}


const QrTicket = (props) => {
    const [isVisible, setVisible] = useState(false)
    console.log({ isVisible })

    return (
        <TouchableOpacity
            onPress={() => setVisible(!isVisible)}
            style={styles.qrCode}>
            <QRTicketModal
                isVisible={isVisible}
                setVisible={setVisible}
            />
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

export default QrTicket;

const styles = StyleSheet.create({
    qrCode: {
        flex: 3,
        backgroundColor: 'white',
        padding: 5,
        ...theme.borderRadius(5)
        // alignItems: 'stretch',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
    },
    default: {
        flex: 1
    },
    details: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        maxHeight: 140,
    }
});