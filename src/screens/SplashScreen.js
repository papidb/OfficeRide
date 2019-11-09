import React, { Component } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'


class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrap = this._bootstrap.bind(this);
        this._bootstrap()
    }
    _bootstrap = async () => {
        // log(this.props.navigation);
        this.props.navigation.navigate("Home");
    }
    render() {
        return (
            <View>
                <Text>Here</Text>
                <ActivityIndicator />
            </View>
        )
    }
}

export default SplashScreen;