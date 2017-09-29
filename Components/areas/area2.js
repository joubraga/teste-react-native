import React, { Component } from 'react'
import { View, Text, Button, Alert } from 'react-native'

class Area2 extends Component {
    static navigationOptions = {
        title: 'Area 2'
    }

    constructor(props){
        super(props)

    }

    render() {
        let { params } = this.props.navigation.status
        return (
            <View>
                <Text> { params.title } </Text>
                <Text> Página Area 2 </Text>
            </View>
        )
    }
}

export default Area2