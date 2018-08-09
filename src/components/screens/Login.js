import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import Form from '../Form.js'
import config from '../../config';

class Login extends Component {

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

    login() {
        let credentials = this.state.credentials;
        credentials.email = this.state.credentials.email.toLowerCase();
        console.log(JSON.stringify(credentials));
        fetch(config.baseUrl + 'login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
            
        })
        .then((response) => response.json())
        .then(jsonResponse => {
            console.log(JSON.stringify(jsonResponse))
            if (jsonResponse.confirmation==="success") {
                this.props.navigation.navigate('Main')
            }else{
                console.log("this is the case");
                throw new Error(jsonResponse.message);
            }
        })
        .catch(err => {
           alert(JSON.stringify(err.message));
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
                <Text>Login Page</Text>
                <TextInput 
                    autoCapitalize="none"
                    // taking control of the values, telling it what to display.. called a controlled component
                    value={this.state.email}
                    placeholder="Email" 
                    style={styles.input}
                    autoCorrect={false}
                    onChangeText={text => this.updateText(text, "email")}    
                    />
                
                
                <TextInput 
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={text => this.updateText(text, "password")}
                    secureTextEntry
                    autoCorrect={false}
                    placeholder="Password" 
                    style={styles.input}
                 />
                <Button 
                    onPress = {() => {
                        this.login();
                    }} 
                    title="Login"

                />
                <Button title="No account? Sign up here!" onPress={() => this.props.navigation.navigate('signup')} />
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






// import {Actions} from 'react-native-router-flux';

// class Login extends Component {

//     signup() {
//         Actions.signup()
//     }

//     render() {
//         return(
//             <View style={styles.container}>
//                 <Form type="Login"/>
//                 <View style={styles.signupTextCont}>
//                     <Text style={styles.signupText}>Don't Have an Account yet?</Text>
//                     <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Sign Up</Text></TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container : { 
//       backgroundColor: '#65D8F6',
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center'
//     },

//     signupTextCont: { 
//         flexGrow: 1,
//         alignItems: 'flex-end',
//         justifyContent: 'center',
//         marginVertical: 16,
//         flexDirection: 'row'
//       },

//       signupText: {
//           color: 'rgba(255, 255, 255, 0.6)',
//           fontSize:16
//       },

//       signupButton: {
//           color: '#ffffff',
//           fontSize: 16,
//           fontWeight: '500'
//       }
//   });


  export default Login;