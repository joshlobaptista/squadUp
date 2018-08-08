import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Routes from './Routes.js';

export default class Profile extends Component {
    render() {
        return(
            <View style={styles.container}>
                
              <Routes />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : { 
      flex: 1,
    }
  });
