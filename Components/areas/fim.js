import React, { Component } from 'react'
import { View, Text, Button, Alert } from 'react-native'

class Fim extends Component {

    static navigationOptions = {
        title: 'Fim'
    }

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text> Programador React desdo Beta </Text>
            </View>
        )
    }
}

export default Fim