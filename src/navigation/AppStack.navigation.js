import React, { Component } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, Image, StyleSheet, ScrollView } from 'react-native'
import { createStackNavigator, Header } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import Home from '../screens/Home'
import Payment from '../screens/Payment'
import RideHistory from '../screens/RideHistory'
import RidePreferences from '../screens/RidePreferences'
import Settings from '../screens/Settings'

import { connect } from 'react-redux'
import { colors, theme } from '../constants'
import Feather from 'react-native-vector-icons/Feather';
import Avatar from '../components/Avatar';
import AddCard from '../screens/Payment/AddCard';


const deviceWidth = Dimensions.get("screen").width;



const CustomDrawerContentComponent = props => {
    // console.log({ props })
    return (
        <ScrollView>
            <SafeAreaView
                style={styles.container}
                forceInset={{ top: 'always', horizontal: 'never' }}
            >

                <View style={{
                    heigth: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'
                }}>

                    <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: colors.greyed,
                        marginVertical: 10,
                        width: '100%',
                        justifyContent: 'flex-end',
                        height: 200,
                        padding: 20,
                    }}>
                        <Avatar
                            circular
                            radius={50}
                            style={{
                                marginBottom: 10,
                            }}
                            src={require("../../assets/images/avatar2.jpg")}
                        />
                        <View>
                            <Text style={{ fontSize: 20 }}>Hello, Damola</Text>
                        </View>
                    </View>
                </View>
                <DrawerItems {...props} />
                <View style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    alignContent: 'flex-end',
                    flexGrow: 1,
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',

                    }}>
                        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>

                            <View style={{ flex: 1 }} />
                            <TouchableOpacity style={{ backgroundColor: colors.mainBlue, flex: 8, alignItems: 'center', ...theme.borderRadius(5) }}>
                                <Text style={{ padding: 15, color: colors.white, fontSize: 20 }}>Sign up as a Driver</Text>
                            </TouchableOpacity>
                            <View style={{ flex: 1 }} />
                        </View>

                    </View>
                </View>
            </SafeAreaView>
        </ScrollView >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue',
        height: Dimensions.get("screen").height
        // flexDirection: 'column-reverse'
    },
});

export default createDrawerNavigator({
    Home: {
        screen: Home
    },
    RideHistory: {
        screen: RideHistory
    },
    RidePreferences: {
        screen: RidePreferences
    },
    Payment: {
        screen: createStackNavigator({
            Payment: {
                screen: Payment
            },
            AddCard: {
                screen: AddCard
            }
        }, {
                navigationOptions: {
                    drawerLabel: 'Payment',
                    drawerIcon: ({ tintColor }) => (
                        <Feather
                            name="credit-card"
                            color={colors.drawerIcon}
                            size={24}
                        />
                    ),
                }
            })
    },
    Settings: {
        screen: Settings
    },
},
    {
        contentComponent: CustomDrawerContentComponent,
        overlayColor: colors.brandPrimary,
        drawerWidth: deviceWidth * 0.80,
        contentOptions: {
            activeTintColor: colors.mainBlue,
            activeBackgroundColor: colors.white,
            iconContainerStyle: {
                opacity: 1
            },
            itemStyle: {
                height: 60,
            },
            labelStyle: {
                fontSize: 18,
            },
            iconContainerStyle: {
                margin: 0,
            },
            itemsContainerStyle: {
                flex: 1,
                marginVertical: 10,
            }
        },
        // initialRouteName: 'Payment'
    }
);
