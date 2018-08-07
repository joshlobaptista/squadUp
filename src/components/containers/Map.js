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
                    latitude: 42.292501,
                    longitude: -71.080053
                },
                title: "Lee School"
             },
             {
                 coordinate: {
                     latitude: 42.3649365,
                     longitude: -71.0669152
                 },
                 title: "Basketball City"
             }
             
            ]
        };
    }

    getParks(region){
        console.log(JSON.stringify(region));
        const query = queryString.stringify(region)
        fetch(`${config.url}api/park?${query}`)
            .then(response => {
                console.log("success");
                return response.json();
        })
        .then(responseJson => {
            let newMarkers = [];
            responseJson.data.forEach(par => {
                console.log(JSON.stringify(par.location));
                const loc ={   
                    coordinate: {
                        latitude: par.location.coordinates[1],
                        longitude: par.location.coordinates[0]
                    },
                    title: par.name
                };
                console.log(loc);
                newMarkers.push(loc);               
            })
           
            this.setState({
                markers: newMarkers
            });            
        })
        .catch((err) => {
            alert("Sorry something went wrong");
        });
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