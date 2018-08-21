import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList } from "react-native";
import config from '../../config';

class Courts extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        courts: [
            {
                "_id": {
                    "$oid": "5b6644c5fb6fc06798a117cb"
                },
                "name": "Tobin Community Center",
                "location": {
                    "type": "Point",
                    "coordinates": [-71.098164,
                        42.332047
                    ]
                },
                "category": "Parks"
            },
                  {
                "_id": {
                    "$oid": "5b6644c5fb6fc06798a11234567"
                },
                "name": "Perry Park",
                "location": {
                    "type": "Point",
                    "coordinates": [-71.098164,
                        42.332047
                    ]
                },
                "category": "Parks"
            },
                  {
                "_id": {
                    "$oid": "5b6644c5fb6fc067982345"
                },
                "name": "Dudley park",
                "location": {
                    "type": "Point",
                    "coordinates": [-71.098164,
                        42.332047
                    ]
                },
                "category": "Parks"
            }
          
        ]
      };
    }
    renderCourts ({item}) {
            return(
            <View style={{
            height: 60,
            width: 200,
            justifyContent: 'center',
            margin: 'auto',
            flex: 1
             }}>
                <Text>{item.name}</Text>
            </View>
            )
    }
    render() {
        const state = this.state;
        const courts = state.length ? state.courts.map(court=>{
                return(
                    <FlatList
                    renderItem={this.renderCourts}
                    data={state.courts}
                    />
                )
            }) : null;
      return (
        <View style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5CB0D7"
            }} >
          <Text>Courts List</Text>
          <FlatList
            renderItem={this.renderCourts}
            data={state.courts}
             />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    list: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    }
  });
  
  export default Courts;