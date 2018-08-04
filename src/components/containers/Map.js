import React, {Component } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import config from '../../config';
import queryString from 'query-string';

class Map extends Component {
    constructor() {
        super();
        this.state = {
            markers: [
             {
                coordinate: {
                    latitude: 42.3569998,
                    longitude: -71.0597768
                },
                title: "Resilient Coders",
                description: "50 Milk St"
             },
             {
                 coordinate: {
                     latitude: 42.3649365,
                     longitude: -71.0669152
                 },
                 title: "Basketball City",
                 description: "Basketball gym"
             }
             
            ]
        };
    }

    getParks(region){
        const query = queryString.stringify(region)
        fetch(`${config.url}api/park?${query}`)
            .then(response=>{
                return response.json()
        })
        .then(responseJson => {
            console.log(responseJson);
            // this.setState({

            // })
        })
        .catch((err) =>{
            alert("Sorry something went wrong");
        })
    }


    render(){
        return(
            <View style={{ height: 100 + "%", width: 100 + "%" }}>
                <MapView
                    onRegionChangeComplete={region => this.getParks(region)}
                style={{ height: 100 + "%", width: 100 + "%" }}
                // provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 42.3569998,
                    longitude: -71.0597768,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
            >
                { this.state.markers.map((marker, i) => {
                    return (
                        <Marker
                            coordinate={marker.coordinate}
                            title={marker.title}
                            description={marker.description}
                        />
                    );
                })}
            </MapView>
            </View>
        );
    }
}

export default Map;