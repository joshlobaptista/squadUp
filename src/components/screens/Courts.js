import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// import { SearchBar } from 'react-native-elements';

class Courts extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text> List Of Courts here </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : { 
      backgroundColor: '#455a64',
    }
  });

export default Courts;