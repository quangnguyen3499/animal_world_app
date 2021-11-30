import {Place} from '@core';
import {ButtonCircle, ImageSlider} from '@shared-view';
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

interface Props {
  navigation?: any;
  placeDetail?: any;
  route?: any;
  isLoading?: boolean;
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
    const {navigation, placeDetail, isLoading} = this.props;
    
    if(Object.keys(placeDetail).length === 0 || isLoading)
      return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={60} color="blue" />
        </View>
      )

    return (
      <View style={styles.container}>
        <ImageSlider data={placeDetail.images} />
        <ButtonCircle
          onPress={() => navigation.navigate('ListPlace')}
          name={'long-arrow-alt-left'}
          style={styles.backBtn}
          color={'black'}
          size={24}
        />
        <View style={styles.content}>
          <Text style={styles.name}>{placeDetail.detail.name}</Text>
          <Text style={styles.normalText}>Url: {placeDetail.detail.url}</Text>
          <Text style={styles.normalText}>Mô tả: {placeDetail.detail.description}</Text>
          <View style={styles.bottom}>
            <Text style={styles.normalText}>IndoorMap</Text>
            <ButtonCircle
              onPress={() => navigation.navigate('IndoorMap', {place_id: placeDetail.detail.id})}
              name={'map'}
              style={styles.mapBtn}
              size={30}
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
    alignItems: 'center',
  },
  backBtn: {
    position: 'absolute',
  },
  mapBtn: {
    backgroundColor: 'blue',
    margin: 10,
  },
  name: {
    fontSize: 30,
  },
  normalText: {
    fontSize: 20,
    margin: 10,
  },
  bottom: {
    alignItems: 'center'
  },
});
