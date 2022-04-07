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
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />
        <ImageBackground
          source={require('../assets/bg.png')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>ISS Tracker App</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('ISSLocation');
            }}>
            <Text style={styles.routeText}>ISS Location</Text>
            <Text style={styles.knowMore}>Know More -></Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image
              source={require('../assets/iss_icon.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => {
              this.props.navigation.navigate('Meteors');
            }}>
            <Text style={styles.routeText}>Meteors</Text>
            <Text style={styles.knowMore}>Know More -></Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image
              source={require('../assets/meteor_icon.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
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
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 75,
    borderRadius: 30,
    backgroundColor: 'white',
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
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    paddingLeft: 15,
  },
  knowMore: {
    paddingLeft: 16,
    color: 'red',
    fontSize: 15,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 110,
    right: 20,
    bottom: -23,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 130,
    width: 130,
    resizeMode: 'contain',
    right: 20,
    top: -70,
  },
});

//chipmunk
