import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import Form from '../Form.js'

class Profile extends Component {

    login() {
        this.props.navigation.navigate("Map");
        //Navigate to the next page
    }

    render(){
        return (
            <TouchableOpacity 
                style={{
                    height: 100 + "%",
                    width: 100 + "%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onPress={() => { this.login()
                }}
                >
                <Text>Future Profile Page</Text>
            </TouchableOpacity>
        );
    }
}






  export default Profile;