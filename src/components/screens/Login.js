import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Login extends Component {
    render() {
        return(
            <View style={StyleSheet.container}>
                <Text>Login</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : { 
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
