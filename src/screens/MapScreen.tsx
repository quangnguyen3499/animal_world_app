import React, {Component} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Tabs from '../navigation/tabs';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

type MyState = {
  isLoading: boolean;
  latitude: any;
  longitude: any;
  latitudeDelta: any;
  longitudeDelta: any;
};

export default class MapScreen extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    };
  }

  componentDidMount() {}

  render() {
    const loading = this.state.isLoading;
    return (
      <View style={styles.container}>
        <MapView
        provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker 
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="Place"
            description="Address"
          >
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text>Rare animal</Text>
                  <Text>
                    <Image
                      style={styles.image}
                      resizeMode='stretch'
                      source={require('../assets/images/lion.jpg')}
                    />
                  </Text>
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    width: 30,
    height: 30,
  },
  bubble: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.4,
    padding: 15,
    width: 150,
  },
  image: {
    width: 140,
    height: 140,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
});
