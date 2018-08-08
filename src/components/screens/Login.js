import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Form from '../Form.js'

import {Actions} from 'react-native-router-flux';

export default class Login extends Component {

    signup() {
        Actions.signup()
    }

    render() {
        return(
            <View style={styles.container}>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't Have an Account yet?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : { 
      backgroundColor: '#65D8F6',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    signupTextCont: { 
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row'
      },

      signupText: {
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize:16
      },

      signupButton: {
          color: '#ffffff',
          fontSize: 16,
          fontWeight: '500'
      }
  });
