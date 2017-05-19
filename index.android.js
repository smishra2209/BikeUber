/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {showText : true};

        setInterval(() =>{
            this.setState({showText: !this.state.showText});
        },1000);
    }

    render(){
        let display = this.state.showText? this.props.text : '';
        return(
            <Text>{display}</Text>
        );
    }
}

class BikeUber extends Component{
    render(){
        return (
            <View>
                <Blink text="Suraj"/>
            </View>
        );
    }
}

AppRegistry.registerComponent('BikeUber', () => BikeUber);
