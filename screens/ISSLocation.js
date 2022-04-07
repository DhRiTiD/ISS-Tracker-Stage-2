import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import axios from 'axios'; //api current location tracker

export default class ISSLocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    this.getIssLocation();
  }

  //reading the location from the api
  //response is a defined var for containing data
  getIssLocation = () => {
    axios
      .get('https://api.wheretheiss.at/v1/satellites/25544')
      .then((response) => {
        this.setState({
          location: response.data, //json
        });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    //if the app takes time to load the map fro google or read the data the LOADING screen will be displayed.
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            style={styles.loadGif}
            source={require('../assets/loading.gif')}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.androidSafeArea} />
          <ImageBackground
            source={require('../assets/iss_bg.jpg')}
            style={styles.backgroundImage}>
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>ISS LOCATION</Text>
            </View>

            <View style={styles.mapContainer}>
              {/*pinpointing location on the map only not img*/}
              <MapView
                style={styles.map}
                region={{
                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                  latitudeDelta: 100,
                  longitudeDelta: 100,
                }}>
                {/*marking on the map with the img*/}
                <Marker
                  coordinate={{
                    latitude: this.state.location.latitude,
                    longitude: this.state.location.longitude,
                  }}>
                  <Image
                    source={require('../assets/iss_icon.png')}
                    style={{ height: 50, width: 50 }}
                  />
                </Marker>
              </MapView>

              {/*adding additional info*/}
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                  Latitude: {this.state.location.latitude}{' '}
                </Text>
                <Text style={styles.infoText}>
                  Longitude: {this.state.location.longitude}{' '}
                </Text>
                <Text style={styles.infoText}>
                  Velocity: {this.state.location.velocity} Km/H
                </Text>
                <Text style={styles.infoText}>
                  Altitude: {this.state.location.altitude} Km
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  mapContainer: {
    flex: 0.5,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    height: 290,
    width: 300,
    marginTop: 20,
    marginLeft: 9,
    backgroundColor: 'rgba(180,180,255,0.45)',
    borderWidth: 5,
    borderColor: '#748ABB',
    borderRadius: 30,
  },
  infoText: {
    marginTop: 14,
    marginLeft: 9,
    fontSize: 18,
    color: 'white',
  },
  loadGif: {
    height: 90,
    width: 90,
  },
});

//chipmunk
