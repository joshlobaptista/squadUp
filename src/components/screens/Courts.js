import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList } from "react-native";


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
      "name": "Test 2",
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
      "name": "Test 3",
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
    renderCourts (courts) {
        courts.map(court=>{
            return(
            <View style={{height: 60, width: 60}}>
                <Text>{court.name}</Text>
            </View>
            )
        })
        // return <FlatList
        // data={this.state.courts}
        // key={index}
        // renderItem={ ({ item }) => {
        // console.log(item);
        // <View style={{height: 60, width: 60}}>
        //     <Text>{court.title}</Text>
        // </View>
        // }}
        // />
}
    
    render() {
        const courts = this.state.courts.map(court=>{
                return(
                <View key={court.name} style={{height: 60, width: 200}}>
                    <Text>{court.name}</Text>
                </View>
                )
            })
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
        {courts}
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