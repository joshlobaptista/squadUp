import React, { Component } from 'react';
import {Router, Stack, Scene } from 'react-native-router-flux';

import Login from './Login.js';
import Signup from './Signup.js';
import { Text } from 'react-native';

const WelcomeScreen = (props) => {
    return(
        <Text>Welcome {props.name}</Text>
    )
}


export default class Routes extends Component {

    render() {
        var loggedIn = false;
        const welcomeScreen = loggedIn ? WelcomeScreen : Login;
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key={'login'} component={welcomeScreen} title="Login" initial={true} />
                    <Scene key={'signup'} component={Signup} title="Register" />
                </Stack>
            </Router>
        )
    }
}