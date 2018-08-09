import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";
import Form from '../Form.js'
import config from '../../config'

class Signup extends Component {

    constructor(){
        super();
        this.state = {
            credentials: {
                email: "",
                password: ""
            }
        };
    }
    // when setting state on nested object you need make sure original object at the root is a new object
    updateText(text, field) {
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState({
            credentials: newCredentials
        });
    }

    signup() {
        fetch(config.baseUrl + 'users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.credentials),
            
        })
        .then((response) => response.json())
        .then(jsonResponse => {
            if (jsonResponse.confirmation==="success") {
                this.props.navigation.navigate('Main')
            }else{
                throw new Error({
                    message: "Sorry, something went wrong; please try again"
                });
            }
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    render(){
        return (
            <View 
                style={{
                    height: 100 + "%",
                    width: 100 + "%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#5CB0D7"
                }}
                >
                <Text>Sign Up Page</Text>
                <TextInput 
                    // taking control of the values, telling it what to display.. called a controlled component
                    value={this.state.email}
                    placeholder="Email" 
                    style={styles.input}
                    autoCorrect={false}
                    onChangeText={text => this.updateText(text, "email")}    
                    />
                
                
                <TextInput 
                    value={this.state.password}
                    onChangeText={text => this.updateText(text, "password")}
                    secureTextEntry
                    autoCorrect={false}
                    placeholder="Password" 
                    style={styles.input}
                 />
                <Button 
                    onPress = {() => {
                        this.signup();
                    }} 
                    title="Signup"

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 25,
        height:50,
        width: 100 + "%",
        paddingHorizontal: 50,
        backgroundColor: "#ffffff",
        marginBottom: 10
    }
});




  export default Signup;