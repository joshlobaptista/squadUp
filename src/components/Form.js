import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default class Form extends Component {

    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder='Email' 
                    placeholderTextColor= '#ffffff'
                    selectionColor= '#fff'
                    keyboardType='email-address'
                    onSubmitEditing={() => this.password.focus()}
                    />
                <TextInput style={styles.inputBox}
                    placeholder='Password' 
                    secureTextEntry={true}
                    placeholderTextColor= '#ffffff'
                    ref={(input) => this.password = input}
                    />

                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : { 
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    inputBox: {
        width:250,
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal:16,
        paddingVertical:5,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 5
    },

    button: {
        backgroundColor:'#1362D1',
        width:250,
        borderRadius: 25,
        marginVertical: 5,
        paddingVertical:12

    },

    buttonText: {
        fontSize:16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
  });
