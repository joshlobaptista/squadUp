import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Login  from "./Login.js";
import Signup from "./Signup.js";

// import { SearchBar } from 'react-native-elements';

export default class Profile extends Component {
    render() {
        return(
            <View style={styles.container}>
                
              <Signup />
            </View>
        );
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
