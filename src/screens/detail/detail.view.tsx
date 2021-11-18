import {Place} from '@core';
import {ButtonCircle, ImageSlider} from '@shared-view';
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

interface Props {
  navigation?: any;
  placeDetail?: any;
  route?: any;
  doGetPlaceDetail: (place_id: string) => void;
}

export default class DetailComponent extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const {route, doGetPlaceDetail} = this.props;
    const place_id = JSON.stringify(route.params.place_id);
    doGetPlaceDetail(place_id);
  }

  render() {
    const {navigation, placeDetail} = this.props;
    
    if(Object.keys(placeDetail).length === 0)
      return (
        <View style={{alignItems: 'center'}}>
          <ActivityIndicator size={60} color="#47477b" />
          <Text>Loading</Text>
        </View>
      )

    return (
      <View style={styles.container}>
        <ImageSlider data={placeDetail.images} />
        <ButtonCircle
          onPress={() => navigation.navigate('ListPlace')}
          name={'backward'}
          style={styles.backBtn}
        />
        <View style={styles.content}>
          <Text style={styles.name}>{placeDetail.detail.name}</Text>
          <View style={styles.description}>
            <Text>Url: {placeDetail.detail.url}</Text>
            <Text>{placeDetail.detail.description}</Text>
          </View>
          <View style={styles.bottom}>
            <Text>Go to IndoorMap</Text>
            <ButtonCircle
              onPress={() => navigation.navigate('IndoorMap', {place_id: placeDetail.detail.id})}
              name={'map'}
              style={styles.mapBtn}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  content: {
    top: 250,
    padding: 10,
    position: 'absolute',
    backgroundColor: '#CCD0D1',
  },
  backBtn: {
    opacity: 0.5,
    position: 'absolute',
    backgroundColor: '#555656'
  },
  mapBtn: {
    backgroundColor: 'blue'
  },
  name: {

  },
  description: {

  },
  bottom: {

  },
});
