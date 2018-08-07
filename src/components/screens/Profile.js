import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// import { SearchBar } from 'react-native-elements';

class Profile extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text> Hello </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : { 
      backgroundColor: '#455a64',
    }
  });

export default Profile;