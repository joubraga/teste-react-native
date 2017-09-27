import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Area1 from './Components/areas/area1'
import Area2 from './Components/areas/area2'
import Fim from './Components/areas/fim'

class App extends Component {
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props)
    }
    render() {
        let { navigate } =  this.props.navigation
        return (
            <View style={styles.container}>
              <Text> Area 1 </Text>
              <Button title="Go to Area 1 App" onPress={ () => navigate('Area1') } ></Button>
              <Text> Area 2 </Text>
              <Button title="Go to Area 2 App" onPress={ () => navigate('Area2') } ></Button>
              <Text> Fim </Text>
              <Button title="Chega por hoje" onPress={ () => navigate('Fim') } ></Button>
                {/*<Counter></Counter>*/}
            </View>
        );
    }
}

const StackApp =  StackNavigator ({
    Home: { screen: App },
    Area1: { screen: Area1 },
    Area2: { screen: Area2 },
    Fim: { screen: Fim }
})

export default StackApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
