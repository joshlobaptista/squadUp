import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Form from '../Form.js'

export default class Login extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't Have an Account yet?</Text>
                    <Text style={styles.signupButton}> Sign Up</Text>
                </View>
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
