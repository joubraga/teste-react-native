import React, { Component } from 'react'
import { View, Text, Button, Alert } from 'react-native'

class Area1 extends Component {

    static navigationOptions = {
        title: 'Area 1'
    }

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text> Página Area 1 </Text>
            </View>
        )
    }
}

export default Area1