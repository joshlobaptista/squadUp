import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Form from '../Form.js'

import {Actions} from 'react-native-router-flux';

const Signup = (props) => {
    const goBack = () => {
        Actions.pop();
    }
    return(
        <View style={styles.container}>
            <Form type="Signup"/>
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Already Have an Account?</Text>
                <TouchableOpacity onPress={goBack}><Text style={styles.signupButton}> Sign In</Text></TouchableOpacity>
            </View>
        </View>
    )
}


// export default class Signup extends Component {

//     goBack() {
//         Actions.pop();
//     }


//     render() {
//         return(
//             <View style={styles.container}>
//                 <Form type="Signup"/>
//                 <View style={styles.signupTextCont}>
//                     <Text style={styles.signupText}>Already Have an Account?</Text>
//                     <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign In</Text></TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }
// }

const styles = StyleSheet.create({
    container : { 
      backgroundColor: '#65D8F6',
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

  export default Signup